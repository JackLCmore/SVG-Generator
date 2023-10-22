const Triangle = require("../index.js");

describe('Triangle',()=>{
    describe('element',()=>{
        it('should return an svg polygon string with an equal string value',()=>{

            const element = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />

            <text x="150" y="150" font-size="60" text-anchor="middle" fill="black">jek</text>`

            const newTri = new Triangle ("blue","jek","black")

            expect(newTri.element).toBe(element);
        });
    });
});