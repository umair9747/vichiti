#node-expand-url

HTTP-Pool-enhanced URL expander for node.js.

#Motivation

Why another lib to wrap a code snippet that anyone can do?

The current unshortener/url-expander npm modules only work with a small number `(<10)` of URLs. They would trigger following error if used as-is:

````
(node) warning: possible EventEmitter memory leak detected. 11 listeners added. 
Use emitter.setMaxListeners() to increase limit.
Trace
    at Socket.EventEmitter.addListener (events.js:160:15)
    at Socket.Readable.on (_stream_readable.js:689:33)
````

The discussion on that error is lengthy and I am not really sure what the problem is. Ex. [Request Issue #311](https://github.com/mikeal/request/issues/311)

In short, it rendered their solutions unusable for my purposes so I made this module so trivial work can stay trivial and I might have a chance to learn how to get around that listner error.


##Installation

Global
```
npm install expand-url -g
```

Local
```
npm install expand-url
```

##Usage

```JavaScript
var urlExpander=require('expand-url');

urlExpander.expand('http://goo.gl/siv9G7', function(err, longUrl){
	console.log(longUrl);
});
```

To expand the 3000 short URLs (100 at a time) as an example:

```JavaScript
var request = require("request");
var async = require('async');
var urlExpander = require('expand-url');

var counter=0;
var q = async.queue(function (shortUrl, callback) {
    urlExpander.expand(shortUrl, function(err, longUrl){
        counter++;
        console.log(counter+": "+longUrl);
        callback();
    });
}, 100);

q.drain = function() {
    console.log(counter);
    console.log('all urls have been processed');
}

var i = 0;
while (i< 3000){
	q.push("http://nyti.ms/1jhZLJz", function (err) {});
    i++;
}
```


## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

