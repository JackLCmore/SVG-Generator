class Shape {
    constructor(color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}

// class Triangle extends Shape {
//     constructor(color,text,textColor){
//     }
//     generateTriangle(){
//         return`<rect width="150" height="150" fill="${this.color}"/>

//         <text x="75" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
//     }
// }

// class Circle extends Shape {
//     constructor(color,text,textColor){
//     }
//     generateCircle(){
//         return`<rect width="150" height="150" fill="${this.color}"/>

//         <text x="75" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
//     }
// }

// class Square extends Shape {
//     constructor(color,text,textColor){
//     }
//     generateSquare(){
//         return`<rect width="150" height="150" fill="${this.color}"/>

//         <text x="75" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
//     }
// }

module.exports = Shape;
// module.exports = Triangle;
// module.exports = Circle;
// module.exports = Square;