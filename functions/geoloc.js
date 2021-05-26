const prompt = require('prompt-sync')();
var colors = require('colors');
var align = require('align-text')
var geoip = require('geoip-lite');


function geolocation (){
    var ip = prompt(align('Enter the IP address (eg: 216.58.196.78): '.green, 5));
    var geo = geoip.lookup(ip);
    var loc = JSON.stringify(geo);
    console.log('\n');
    console.log(align(loc.green, 5));
}

module.exports = {geolocation};
