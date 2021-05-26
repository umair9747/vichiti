//Import starts
const prompt = require('prompt-sync')();
var colors = require('colors');
var align = require('align-text');
var comp = require('./compare');
//Import ends

function userinput(){
    console.log('\n');
    var option = prompt(align('Enter your preferred option number (eg: 1): '.green, 5));
    comp.compareuserinput(option);
}

module.exports = {userinput};