var request = require("request");
var http = require('http');

function expand(shortUrl, options, callback) {
    // options are optional, the function can still be used like this: expand(shortUrl, callback)
    if(typeof options == 'function') {
        callback = options;
        options = {};
    }

    var defaultOptions = { 
    	method: "HEAD"
      , url: shortUrl
      , followAllRedirects: true
      , timeout: 10000
      , pool: pool
	};

    // merge the user-supplied options with the default options
    for(var attribute in options) {
        defaultOptions[attribute] = options[attribute];
    }

	var pool = new http.Agent({'maxSockets': Infinity});
    request(defaultOptions, function (error, response) {
        if (error) {
            callback(error);
        } else {
            callback(undefined, response.request.href);
        }
    }).setMaxListeners(0);
}

module.exports = {
    expand: expand
}
