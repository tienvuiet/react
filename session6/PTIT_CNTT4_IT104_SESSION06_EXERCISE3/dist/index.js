class Shape {
    constructor(name) {
        this.name = name;
    }
    // Method thường: có code, các lớp con dùng lại được
    getInfo() {
        console.log(`Day la hinh ${this.name} co dien tich la ${this.getArea()}`);
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    // Bắt buộc phải triển khai vì Shape có abstract getArea()
    getArea() {
        return this.width * this.height;
    }
}
const rect = new Rectangle("Hinh chu nhat", 5, 10);
rect.getInfo(); // Gọi method thường, nhưng bên trong vẫn gọi abstract method đã được ghi đè
