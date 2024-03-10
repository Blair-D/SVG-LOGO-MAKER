class shapes {
    constructor() {
        this.shape = '';
        this.shapeColor = '';
    }
    setShape(shape) {
        this.shape = shape;
    }
    setColor(color) {
        this.shapeColor = color;
    }
}

class Triangle extends shapes {
    render() {
        return `<polygon height="100" width="100" points="0,200 300,200 150,0" fill="${this.shapeColor}" />`
    }
}

class Circle extends shapes {
    render() {
        return `<circle cx="75%" cy="75%" r="50" height="100%" width="100%"  fill="${this.shapeColor}"/>`
    }
}

class Square extends shapes {
    render() {
        return `<rect x="75%" y="75%" width="250" height = "250" fill="${this.shapeColor}"/>`
    }
}


module.exports = { Triangle, Circle, Square };  