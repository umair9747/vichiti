//Imports
const figlet = require("./initials/figlet");
const features = require("./initials/list");

//Welcome banner
figlet.banner();

//list out the features
setTimeout(features.listfeatures, 10);