const fs = require('fs');
const inquirer = require('inquirer');
const Shape = require('./library/shape.js')

class Triangle extends Shape {
    constructor(color,text,textColor){
        super(color,text,textColor)
        this.element = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />

        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Circle extends Shape {
    constructor(color,text,textColor){
        super(color,text,textColor)
        this.element = `<circle cx="150" cy="100" r="80" fill="${this.color}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Square extends Shape {
    constructor(color,text,textColor){
        super(color,text,textColor)
        this.element = `<rect width="150" height="150" fill="${this.color}"/>

        <text x="75" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

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
]

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
}

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
}

init();

module.exports = {Triangle,Square,Circle}