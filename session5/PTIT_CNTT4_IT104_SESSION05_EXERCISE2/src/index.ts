class Student {
    id : number 
    age : number
    email : string
    constructor(id : number, age: number, email : string  ){
        this.id  = id 
        this.age = age
        this.email= email
    }
    print(){
        console.log( `id: ${this.id}, age: ${this.age}, email: ${this.email}`);
        
    }
}
let students: Student[]=[];
students.push(new Student(1,23,"tien@gmail.com"))
students.push(new Student(2,24,"dragon@gmail.com"))
students.forEach((e)=>e.print())