const prompt = require('prompt-sync')();
var colors = require('colors');
var align = require('align-text');

function scanner(){
    const nodePortScanner = require('node-port-scanner');
    
    var ip = prompt(align('Enter the IP address: '.green, 5));

    async function checkLocalPorts (ip) {
  
        const allPorts = nodePortScanner(ip, []);
        console.log(await allPorts);
        
      }
    
    checkLocalPorts(ip);
}

module.exports = {scanner};