interface Geometry{
    calculateArea():number;
    calculatePerimeter():number;
}
class Circle implements Geometry{
    private radius: number
    constructor(radius: number){
        this.radius = radius
    }
    calculateArea(): number {
        return this.radius*3.14*this.radius
    }
    calculatePerimeter(): number {
        return 2*3.14*this.radius
    }
}
class Rectangle implements Geometry{
    constructor(private width: number, private height: number){}
    calculateArea(): number {
        return this.width*this.height
    }
    calculatePerimeter(): number {
        return (this.height+this.width)*2
    }
}
const circle = new Circle(3)
const ractangle = new Rectangle(2,3)
console.log(`Dien tich hinh tron: ${circle.calculateArea()}`);
console.log(`Chu vi hinh tron: ${circle.calculatePerimeter()}`);

console.log(`Dien tich hinh chu nhat: ${ractangle.calculateArea()}`);
console.log(`Chu vi hinh chu nhat: ${ractangle.calculatePerimeter()}`);