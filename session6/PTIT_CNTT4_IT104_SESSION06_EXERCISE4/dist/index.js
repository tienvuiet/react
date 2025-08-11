class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return this.radius * 3.14 * this.radius;
    }
    calculatePerimeter() {
        return 2 * 3.14 * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return (this.height + this.width) * 2;
    }
}
const circle = new Circle(3);
const ractangle = new Rectangle(2, 3);
console.log(`Dien tich hinh tron: ${circle.calculateArea()}`);
console.log(`Chu vi hinh tron: ${circle.calculatePerimeter()}`);
console.log(`Dien tich hinh chu nhat: ${ractangle.calculateArea()}`);
console.log(`Chu vi hinh chu nhat: ${ractangle.calculatePerimeter()}`);
