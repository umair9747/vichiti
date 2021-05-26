//Import starts
var whois = require('../functions/whois');
var geoloc = require('../functions/geoloc');
var instagram = require('../functions/instagram');
var email = require('../functions/email');
var url = require('../functions/url');
var safety = require('../functions/safety');
var publicip = require('../functions/publicip');
var port = require('../functions/port');
var mac = require('../functions/mac');
var crypto = require('../functions/crypto');
var align = require('align-text');
//Import ends

function compareuserinput(option){
   switch(option){
       case '1':
           instagram.lookup();
           break;
       case '2':
           email.validator();
           break;
       case '3':
           whois.whoislookup();
           break;
       case '4':
           geoloc.geolocation();
           break;  
       case '5':
           publicip.info();
           break;
       case '6':
           port.scanner();
           break;
       case '7':
           url.expander();
           break;
       case '8':
           safety.check();
           break;
       case '9':
           mac.lookup();
           break;
       case '10':
            crypto.balance();
           break;
       default:
           console.log(align('Invalid option! Exiting...', 5));
           process.exit(1)
           break;
   }
}

module.exports = {compareuserinput};