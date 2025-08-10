class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setWidth(width) {
        this.width = width;
    }
    setHight(height) {
        this.height = height;
    }
    dienTich() {
        return this.width * this.height;
    }
    chuVi() {
        return (this.width + this.height) * 2;
    }
}
let rectangle1 = new Rectangle(2, 4);
console.log(`Chieu rong ht: ${rectangle1.getWidth()}`);
console.log(`Chieu dai ht: ${rectangle1.getHeight()}`);
console.log(`Dien tich hcn: ${rectangle1.dienTich()}`);
console.log(`Chu vi: ${rectangle1.chuVi()}`);
rectangle1.setHight(2);
rectangle1.setWidth(4);
console.log(`Chieu rong sau: ${rectangle1.getWidth()}`);
console.log(`Chieu dai sau: ${rectangle1.getHeight()}`);
console.log(`Dien tich hcn: ${rectangle1.dienTich()}`);
console.log(`Chu vi: ${rectangle1.chuVi()}`);
