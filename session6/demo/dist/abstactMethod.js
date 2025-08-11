class Polygon {
    getInfo() {
        console.log(`
            Day la hinh ${this.getName} co dien tich la ${this.getArea()}
            `);
    }
}
//ko the khoi tao tuong tu abstract class
// const result = new Polygon();
//khoi tao cac lop con ke thua tu abtract class
class Square extends Polygon {
    constructor(side) {
        super();
        this.side = side;
    }
    getName() {
        return "Hinh vuong";
    }
    getArea() {
        return this.side * 2;
    }
}
//khoi tao doi tuong tu lop con 
const square = new Square(5);
square.getInfo();
