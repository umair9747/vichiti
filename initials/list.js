//Import starts
var colors = require('colors');
var align = require('align-text');
var input = require('./input');
//Import ends

function listfeatures(){
        console.log(align("\n\nChoose an option:".green, 5));
        //socialmedia
        console.log('');
        console.log(align("Social Media".green, 5));
        console.log(align("▪ Instagram Username Information (1)".green, 5));
        console.log(align("▪ Email Validator (2)".green, 5));
        //IP Address
        console.log('');
        console.log(align("IP Address".green, 5));
        console.log(align("▪ Whois Lookup (3)".green, 5));
        console.log(align("▪ Geo-location Lookup (4)".green, 5));
        console.log(align("▪ What's My Public IP (5)".green, 5));
        console.log(align("▪ Port Scanner (6)".green, 5));

        console.log('');
        console.log(align("URLs".green, 5));
        console.log(align("▪ URL Expander (7)".green, 5))
        console.log(align("▪ URL Safety Check (8)".green, 5))

        console.log('');
        console.log(align("Misc".green, 5));
        console.log(align("▪ MAC Address Lookup (9)".green, 5))
        console.log(align("▪ Crypto Address Balance Checker (10)".green, 5))

        input.userinput();
    }
    
    module.exports = {listfeatures};