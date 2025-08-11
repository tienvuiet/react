interface Sale{
    name: string 
    sale():void;
}
interface Marketing{
    name: string
    marketing():void;
}
interface DGmarketing extends Marketing{
    dgmarketing():void;
}
//khoi tao lop trien khai tu cac interface
class mx implements Sale, Marketing,DGmarketing{
    name: string ;
    constructor(name: string){
        this.name = name;
    }
    sale():void{    
        console.log(`Doing sale`);
    }
    marketing():void {
        console.log(`doing marketing`);
    }
    dgmarketing():void {
        console.log(`doing dgmarketing`);
    }
}
const result : Marketing = new mx("rikkei education")
result.marketing()