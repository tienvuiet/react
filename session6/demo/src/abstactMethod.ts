abstract class Polygon{
    abstract getName():string;
    abstract getArea():number;
    getInfo():void{
        console.log(`
            Day la hinh ${this.getName} co dien tich la ${this.getArea()}
            `);
    }
}
//ko the khoi tao tuong tu abstract class
// const result = new Polygon();

//khoi tao cac lop con ke thua tu abtract class
class Square extends Polygon{
    constructor (private side: number){
        super();
    }
    getName(): string {
        return "Hinh vuong"
    }
    getArea(): number {
        return this.side*2;
    }
}

//khoi tao doi tuong tu lop con 
const square = new Square(5);
square.getInfo();