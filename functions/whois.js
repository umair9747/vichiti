const readline = require('readline');
var whois = require('whois')
var colors = require('colors');
var align = require('align-text')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function whoislookup (){
    rl.question(align("Enter the domain/IP (eg: google.com or 216.58.196.78): ".green, 5), (inp) => {
        whois.lookup(inp, function(err, data) {
            console.log(align(data.green, 5));
        })
        rl.close();
      });    
}

module.exports = {whoislookup};

