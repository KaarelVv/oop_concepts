class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    getArea() {
        return null;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getArea() {
        return  Math.PI * this.radius * this.radius;
    }
    print() {
        console.log("r:" + this.getArea() + " color: " + this.color)
    }
}
class Square extends Shape {
    constructor(color, side) {
        super(color);
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
    print() {
        console.log("s:" + this.side + " color: " + this.color)
    }
}
class Rectangle extends Shape {
    constructor(color, lenght, width) {
        super(color);
        this.lenght = lenght;
        this.width = width;
    }
    getArea() {
        return this.lenght * this.width;
    }
    print() {
        console.log("l:" + this.lenght + "w : " + this.width + " color: " + this.color)
    }
}
class Paint {
    constructor(){
       this.allShapes =[]; 
    } 
    addShape(shape){
        this.allShapes.push(shape);
    } 
    getShape(){
        return this.allShapes;
    }  
    calculateTotalArea(){
        let calculatedArea = 0;
        this.allShapes.forEach(shape => {
            calculatedArea += shape.getArea();

        });
        return calculatedArea;
    } 
} 
const circle = new Circle("Brown", 3);
const square = new Square("red", 5);
const rectangle = new Rectangle("blue", 5, 5);
// square.print();
const paint = new Paint();
paint.addShape(square);
paint.addShape(rectangle);
paint.addShape(circle);
console.log(paint.calculateTotalArea())
paint.calculateTotalArea()
console.log(paint.getShape());
