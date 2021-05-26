const prompt = require('prompt-sync')();
var colors = require('colors');
var align = require('align-text');

function check(){
    var url = prompt(align('Enter the URL (eg: https://google.com/): '.green, 5));
    const lookup = require('safe-browse-url-lookup')({ apiKey: 'AIzaSyBOoV7OkPOgj1zFL7cgsep1FPEg09CM8y4' });

    lookup.checkSingle(url)
        .then(isMalicious => {
            console.log('');
            console.log(isMalicious ? align('The URL is malicious!'.red, 5) : align('The URL is safe!'.green, 5));
        })
        .catch(err => {
            console.log('Something went wrong.');
            console.log(err);
        });
}

module.exports = {check};