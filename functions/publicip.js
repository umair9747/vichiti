var colors = require('colors');
var align = require('align-text');

function info(){
    const publicIp = require('public-ip');

(async () => {
    var ipv4 = await publicIp.v4();
    console.log(align("Your Public IPv4 address is: ".green, 5) + ipv4.yellow);
    
    var ipv6 = await publicIp.v6();
	console.log(align("Your Public IPv4 address is: ".green, 5) + ipv6.yellow);
})();
}

module.exports = {info};