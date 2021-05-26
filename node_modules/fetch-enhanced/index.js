"use strict";

const HttpAgent = require("agentkeepalive");
const HttpProxyAgent = require("http-proxy-agent");
const HttpsProxyAgent = require("https-proxy-agent");
const QuickLRU = require("quick-lru");
const {getProxyForUrl} = require("proxy-from-env");
const {HttpsAgent} = require("agentkeepalive");

const defaultModuleOpts = {
  agentCacheSize: 512,
};

const defaultAgentOpts = {
  maxSockets: 64,
  keepAlive: true,
};

class TimeoutError extends Error {
  constructor(message) {
    super(message);
    this.name = "TimeoutError";
    Error.captureStackTrace(this, TimeoutError);
  }
}

module.exports = (fetchImplementation, moduleOpts = {}) => {
  const opts = {...defaultModuleOpts, ...moduleOpts};
  const agentCache = new QuickLRU({maxSize: opts.agentCacheSize});

  function getAgent(url, agentOpts = {}) {
    const {origin, protocol} = new URL(url);

    const agentCacheKey = JSON.stringify({origin, ...agentOpts});
    if (agentCache.peek(agentCacheKey)) return agentCache.get(agentCacheKey);

    let agent;
    const isHttps = protocol === "https:";
    const proxyUrl = getProxyForUrl(url);
    if (proxyUrl) {
      const {protocol, username, password, hostname, port, pathname, search, hash} = new URL(proxyUrl);
      agent = new (isHttps ? HttpsProxyAgent : HttpProxyAgent)({
        protocol, port,
        hostname: hostname.replace(/^\[/, "").replace(/\]$/, ""), // ipv6 compat
        path: `${pathname}${search}${hash}`,
        auth: username && password ? `${username}:${password}` : username ? username : null,
        ...agentOpts,
      });
    } else {
      agent = new (isHttps ? HttpsAgent : HttpAgent)(agentOpts);
    }

    agentCache.set(agentCacheKey, agent);
    return agent;
  }

  const fetch = (url, {timeout = 0, agentOpts = {}, ...opts} = {}) => {
    return new Promise((resolve, reject) => {
      // proxy
      if (!("agent" in opts)) {
        opts.agent = getAgent(url, {...defaultAgentOpts, ...agentOpts});
      }

      // timeout
      let timeoutId;
      if (timeout) {
        timeoutId = setTimeout(() => {
          const err = new TimeoutError(`${opts.method || "GET"} ${url} timed out after ${timeout}ms`);
          reject(err);
        }, timeout);
      }

      fetchImplementation(url, opts).then(res => {
        if (timeoutId) clearTimeout(timeoutId);
        resolve(res);
      }).catch(err => {
        if (timeoutId) clearTimeout(timeoutId);
        if (err.name === "AbortError") return resolve(null);
        reject(err);
      });
    });
  };

  fetch.clearCache = () => {
    for (const agent of agentCache.values()) {
      if ("destroy" in agent) agent.destroy();
    }
    agentCache.clear();
  };

  return fetch;
};

module.exports.TimeoutError = TimeoutError;
