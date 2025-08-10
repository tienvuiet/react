class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    print() {
        console.log(`id: ${this.id}, age: ${this.age}, email: ${this.email}`);
    }
}
let students = [];
students.push(new Student(1, 23, "tien@gmail.com"));
students.push(new Student(2, 24, "dragon@gmail.com"));
students.forEach((e) => e.print());
