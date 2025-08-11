abstract class Shape {
    constructor(protected name: string) {}
    // Abstract method: chỉ khai báo, không có code
    abstract getArea(): number;
    // Method thường: có code, các lớp con dùng lại được
    getInfo(): void {
        console.log(`Day la hinh ${this.name} co dien tich la ${this.getArea()}`);
    }
}
class Rectangle extends Shape {
    constructor(name: string, private width: number, private height: number) {
        super(name);
    }

    // Bắt buộc phải triển khai vì Shape có abstract getArea()
    getArea(): number {
        return this.width * this.height;
    }
}
const rect = new Rectangle("Hinh chu nhat", 5, 10);
rect.getInfo(); // Gọi method thường, nhưng bên trong vẫn gọi abstract method đã được ghi đè
