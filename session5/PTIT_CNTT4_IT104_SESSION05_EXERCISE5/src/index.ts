class Rectangle {
    private width : number
    private height : number
    constructor(width: number, height: number){
        this.width = width
        this.height = height
    }
    getWidth():number{
        return this.width
    }
    getHeight():number{
        return this.height
    }
    setWidth(width:number){
        this.width = width
    }
    setHight(height:number){
        this.height = height
    }
    dienTich():number{
        return this.width*this.height;
    }
    chuVi(): number{
        return (this.width+this.height )*2
    }
}
let rectangle1 = new Rectangle(2,4);
console.log(`Chieu rong ht: ${rectangle1.getWidth()}`);
console.log(`Chieu dai ht: ${rectangle1.getHeight()}`);
console.log(`Dien tich hcn: ${rectangle1.dienTich()}`);
console.log(`Chu vi: ${rectangle1.chuVi()}`);
rectangle1.setHight(2)
rectangle1.setWidth(4)
console.log(`Chieu rong sau: ${rectangle1.getWidth()}`);
console.log(`Chieu dai sau: ${rectangle1.getHeight()}`);
console.log(`Dien tich hcn: ${rectangle1.dienTich()}`);
console.log(`Chu vi: ${rectangle1.chuVi()}`);

