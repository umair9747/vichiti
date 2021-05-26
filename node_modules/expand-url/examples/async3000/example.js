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
q.push("http://nyti.ms/1jhZLJz", function (err) {
    
});
    i++;
}
