const prompt = require('prompt-sync')();
var colors = require('colors');
var align = require('align-text');

function balance(){
    var address = prompt(align('Enter the wallet address: '.green, 5));
    var balance = require('crypto-balances');
    balance(address, function(error, result) {
    console.log(result);
});

}

module.exports = {balance};