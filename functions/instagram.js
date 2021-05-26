const prompt = require('prompt-sync')();
var colors = require('colors');
var align = require('align-text')
const userInstagram = require("user-instagram");

function lookup (){
    var username = prompt(align('Enter the username: '.green, 5));
    align(JSON.stringify(userInstagram(username) // Same as getUserData()
    .then(console.log)
    .catch(console.error), 5));
}

module.exports = {lookup};
