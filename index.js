const fs = require('fs');
const inquirer = require('inquirer');
const {Triangle,Circle,Square} = require('./library/shape.js');


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
        name:"color",
        message:"What color would you like your logo background to be?(color key or hexcode)",
    },
    {
        type:"input",
        name:"textColor",
        message:"What color would you like the text of your logo to be?(color key or hexcode)",
    },
    {
        type:"list",
        name:"shape",
        message:"Which Shape would you like your logo to be?",
        choices:["Triangle","Circle","Square"]
    }
];

function determineShape(data){
    if (data.shape === "Triangle"){
        const newTri = new Triangle(data.color , data.text , data.textColor)
        return newTri.element;
    }
    else if (data.shape === "Circle"){
        const newCirc = new Circle(data.color , data.text , data.textColor)
        return newCirc.element;
    }
    else if (data.shape === "Square"){
        const newSquare = new Square(data.color , data.text , data.textColor)
        return newSquare.element;
    }
};

function generateSVG(data){
    return `<svg width="300" height="200">
    ${determineShape(data)}
    </svg>`;
};

function init (){
    inquirer
    .prompt(questions)
    .then((response)=>{
        console.log(response)
        fs.writeFile("./destination/logo.svg",generateSVG(response),(err)=>
        err ? console.error(err) : console.log("Success"))
    });    
};

init();
