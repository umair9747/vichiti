# fetch-enhanced
[![](https://img.shields.io/npm/v/fetch-enhanced.svg?style=flat)](https://www.npmjs.org/package/fetch-enhanced) [![](https://img.shields.io/npm/dm/fetch-enhanced.svg)](https://www.npmjs.org/package/fetch-enhanced)

`fetch-enhanced` wraps a provided `fetch`-like module like [node-fetch](https://github.com/node-fetch/node-fetch) and adds:

- HTTP Proxy discovery from standard environment variables
- HTTP Request Timeout support
- HTTP Keepalive enabled by default
- TCP_NODELAY enabled by default
- Accessible [agent options](https://nodejs.org/api/https.html#https_new_agent_options)

## Usage

```bash
npm i fetch-enhanced node-fetch
```
```js
const nodeFetch = require("node-fetch");
const fetch = require("fetch-enhanced")(nodeFetch);

await fetch("https://example.com");
```

## API
### fetchEnhanced(fetchImplementation, [opts])

- fetchImplementation: *Function* A `fetch`-like module that takes `(url, opts)` and a `agent` option.
- `opts` *Object*
  - `agentCacheSize`: *number* Size of the agent cache. Default: `512`.

### fetch(url, [opts])

- `opts` *Object*
  - `timeout`: *number* Request timeout in milliseconds. Default: 0 (meaning no timeout).
  - `agent`: *http.Agent* Custom HTTP agent. When specified, proxy discovery will no longer work.
  - `agentOpts`: *object* [Agent options](https://nodejs.org/api/https.html#https_new_agent_options). Default: `{maxSockets: 64, keepAlive: true}`
  - Any valid `fetch` module option, like for [`node-fetch`](https://github.com/node-fetch/node-fetch#options)

### fetch.clearCache()

Clear the agent cache and destroys all cached agents. This is generally only neccessary when the proxy environment variables are expected to change during runtime or to close open keepalive sockets.

### fetchEnhanced.TimeoutError

Error class that can be used for `err instanceof TimeoutError`.

© [silverwind](https://github.com/silverwind), distributed under BSD licence
