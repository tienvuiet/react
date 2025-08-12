class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`name: ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`id : ${this.id}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`subject: ${this.subject}`);
    }
}
const student = new Student("tien", 12);
student.displayInfo();
const teacher = new Teacher("asda", "toan");
teacher.displayInfo();
