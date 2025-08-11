abstract class Job{
    constructor(protected type: string){}
    abstract calculateSalary():number
    printType():void{
        console.log(`Day la loai cv ${this.type} voi muc luong ${this.calculateSalary()}`);
    }
}
class PartimeJob extends Job{
    constructor(type: string, private workingHour: number){
        super(type)
    }
    calculateSalary():number{
        return this.workingHour*30000
    }
}
class FullTimeJob extends Job {
    constructor(type: string){
        super(type)
    }
    calculateSalary(): number {
        return 100000000
    }
}
const used1 = new PartimeJob("be co", 3)
console.log(used1.printType());
const used2 = new FullTimeJob("gia su")
console.log(used2.printType());

