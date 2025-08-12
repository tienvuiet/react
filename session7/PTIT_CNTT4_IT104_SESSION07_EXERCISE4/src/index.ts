abstract class Person {
    constructor(public name: string){}
    displayInfo(){
        console.log(`name: ${this.name}`);
    }
}
class Student extends Person {
    constructor(name: string, public id : number){
        super(name)
    }
    displayInfo(): void {
        super.displayInfo()
        console.log(`id : ${this.id}`);
    }
}
class Teacher extends Person{
    constructor(name: string , public subject : string){
        super(name)
    }
    displayInfo(): void {
        super.displayInfo()
        console.log(`subject: ${this.subject}`);
    }
}
const student = new Student("tien", 12)
student.displayInfo()
const teacher = new Teacher("asda", "toan")
teacher.displayInfo()