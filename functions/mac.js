const prompt = require('prompt-sync')();
var colors = require('colors');
var align = require('align-text');

function lookup(){
    var mac = prompt(align('Enter the MAC address: '.green, 5));
    var oui = require('oui');
    console.log('');
    console.log(align(oui(mac).yellow, 5));
}

module.exports = {lookup};