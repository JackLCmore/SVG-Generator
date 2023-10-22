const {Triangle, Square, Circle} = require("../index.js");
// const Square = require("../index.js");
// const Circle = require("../index.js");

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

describe('Square',()=>{
    describe('element',()=>{
        it('should return an svg rect string with an equal string value',()=>{

            const squareElement = `<rect width="150" height="150" fill="blue"/>

        <text x="75" y="100" font-size="60" text-anchor="middle" fill="black">jek</text>`

            const newSquare = new Square ("blue","jek","black")

            expect(newSquare.element).toBe(squareElement);
        });
    });
});

describe('Circle',()=>{
    describe('element',()=>{
        it('should return an svg circle string with an equal string value',()=>{

            const circleElement = `<circle cx="150" cy="100" r="80" fill="blue"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">jek</text>`

            const newCircle = new Circle ("blue","jek","black")

            expect(newCircle.element).toBe(circleElement);
        });
    });
});