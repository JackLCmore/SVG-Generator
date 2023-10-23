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

class Circle extends Shape {
    constructor(color,text,textColor){
        super(color,text,textColor)
        this.element = `<circle cx="150" cy="100" r="80" fill="${this.color}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
};

class Square extends Shape {
    constructor(color,text,textColor){
        super(color,text,textColor)
        this.element = `<rect width="150" height="150" fill="${this.color}"/>

        <text x="75" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
};

module.exports = {Triangle,Circle,Square};