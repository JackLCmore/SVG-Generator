 # SVG Generator

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributers](#contributers)
  * [Tests](#tests)
  * [Learning Points](#learning-points)
  * [Questions](#questions)
  

  ## License
    
  ODbl
  [![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)
  This {DATA(BASE)-NAME} is made available under the Open Database License: http://opendatacommons.org/licenses/odbl/1.0/. Any rights in individual contents of the database are licensed under the Database Contents License: http://opendatacommons.org/licenses/dbcl/1.0/

    
  ## Description
    
  The SVG Generator is a node.js based application that takes in user input and returns an svg file to you with a customized logo.

  Technologies Used:
  
 * [Git](https://github.com)

 * [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

 * [Node](https://nodejs.org/en)

 * [Inquirer](https://www.npmjs.com/package/inquirer)
  
 * [Jest](https://www.npmjs.com/package/jest)

  ## Installation
    
  [Video Installation Guide](https://youtu.be/B4azq7PEdeE)

  To install the SVG Generator, click the fork button at the top of the repository navbar on GitHub. There you can clone the application down. After locating the newly cloned repo in your terminal, type in 'npm i' to install all required packages for the generator, then type in 'node index.js' to run the app. After completing the questions you can then navigate to the destination folder which will hold your newly generated logo alongside some examples.
    
  ## Usage
    
  To use the app, open it up in your terminal, type 'node index.js' and answer the short list of questions. Pull your newly generated svg file and influence the world with your cutting edge logo.
    
  ## Contributers
    
  This application was made without any contributers or collaborators, all coding was done by myself.
    
  ## Tests
    
  [Video Test Demonstration](https://youtu.be/kOPS5lmCLvU)

  To test if the application is working you can type in 'npm run test' after installing packages.
    
  ## Learning Points

  This is the layout of my class constructors for each shape. They fill in data based on user input and will switch classes based on user choice.

  ```js
  class Shape {
    constructor(color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
};

class Triangle extends Shape {
    constructor(color,text,textColor){
        super(color,text,textColor)
        this.element = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />

        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
};
  ```
  ---
  Here we are running a test through Jest to see if we will get back our expected output.

  ```js
  describe('Triangle',()=>{
    describe('element',()=>{
        it('should return an svg polygon string with an equal string value',()=>{

            const triElement = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />

        <text x="150" y="150" font-size="60" text-anchor="middle" fill="black">jek</text>`

            const newTri = new Triangle ("blue","jek","black")

            expect(newTri.element).toBe(triElement);
        });
    });
});
  ```
  ---

  And here we are constructing the contents of the svg file through a simple conditional statement which checks which shape was chosen by the user and gives back a constructed file based on those choices.

  ```js
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
  ```
  ---
  ## Questions
    
For any questions or inquiries please contact me at any of the following:

Github: https://github.com/JackLCmore

Email: jack.lcmore@gmail.com

LinkedIn: https://www.linkedin.com/in/jack-seymour-b0b2b0292/
