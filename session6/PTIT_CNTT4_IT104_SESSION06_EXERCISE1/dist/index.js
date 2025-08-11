class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(`Day la hinh ${this.name} co kich thuoc ${this.getSize()}`);
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle("Tien", 12, 3);
console.log(rectangle.getName());
