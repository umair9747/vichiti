const prompt = require('prompt-sync')();
var colors = require('colors');
var align = require('align-text')
var emailExistence = require('email-existence');

function validator (){
    var email = prompt(align('Enter the email: '.green, 5));
    console.log('');
    emailExistence.check(email, function(error, response){
        if(response === true){
            console.log(align(email.green + " exists!".green, 5));
        }
        else {
            console.log(align(email.green + " doesn't exists!".green, 5));
        }
    });
}

module.exports = {validator};
