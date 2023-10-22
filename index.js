const fs = require('fs');
const inquirer = require('inquirer');
const shape = require('./library/shape.js');

const questions = [
    {
        type:"input",
        name:"text",
        message:"What text would you like your logo to include?(3 char max)",
        validate: async (input) =>{
            if(input.length > 3){
                return "Please input 3 characters or less"
            }
            return true;
        }
    },
    {
        type:"input",
        name:"textColor",
        message:"What color would you like the text of your logo to be?(color key or hexcode)",
    },
    {
        type:"input",
        name:"color",
        message:"What color would you like your logo background to be?(color key or hexcode)",
    },
    {
        type:"list",
        name:"shape",
        message:"Which Shape would you like your logo to be?",
        choices:["Triangle","Circle","Square"]
    }
]

function generateSVG(data){
    return ``;
};

function init (){
    inquirer
    .prompt(questions)
    .then((response)=>{
        fs.writeFile("./destination/logo.svg",generateSVG(response),(err)=>
        err ? console.error(err) : console.log("Success"))
    });    
}

init();