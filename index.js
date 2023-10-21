const fs = require('fs');
const inquirer = require('inquirer');
const shape = require('./library/shape.js');

const questions = [
    {
        type:"",
        name:"text",
        message:"What text would you like your logo to include(3 char max)",
    },
    {
        type:"input",
        name:"textColor",
        message:"What color would you like the text of your logo to be?",
    },
    {
        type:"input",
        name:"color",
        message:"What color would you like your logo background to be?",
    },
    {
        type:"list",
        name:"shape",
        message:"Which Shape would you like your logo to be?",
        choices:["Triangle","Circle","Square"]
    }
]