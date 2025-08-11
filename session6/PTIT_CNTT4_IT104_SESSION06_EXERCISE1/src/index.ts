abstract class Shape {
    constructor(protected name: string) { }
    abstract getSize(): number
    getName(): void {
        console.log(`Day la hinh ${this.name} co kich thuoc ${this.getSize()}`);
    }
}
class Rectangle extends Shape{
    constructor (name: string,private width: number, private height: number){
        super(name)
    }
    getSize(): number {
        return this.width *this.height
    }
}
const rectangle = new Rectangle("Tien", 12,3)

console.log(rectangle.getName());
