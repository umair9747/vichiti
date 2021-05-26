//Import starts
var figlet = require('figlet');
var colors = require('colors');
var align = require('align-text');
//Import ends

function banner(){
figlet('Vichiti', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(align(data.green, 20))
    console.log(align("An OSINT focused tool made with Nodejs!".green, 17))
    console.log(align("Developed by Umair Nehri (0x9747)".green, 40))
    console.log("");
    console.log(align("\"No man can hope to find out the truth without investigation.\" ~George F. Richards".green, 1))
});
}

module.exports = {banner};