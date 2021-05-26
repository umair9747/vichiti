const prompt = require('prompt-sync')();
var colors = require('colors');
var align = require('align-text');
var urlExpander=require('expand-url');

function expander(){
    var url = prompt(align('Enter the URL (eg: https://bit.ly/2O8Zbrm): '.green, 5));
    urlExpander.expand(url, function(err, longUrl){
    console.log('');
    var expandedurl = "Expanded URL: " + longUrl;
    console.log(align(expandedurl.green, 5));
});
}

module.exports = {expander};