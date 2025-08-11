class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getInfo() {
        return `id: ${this.id}, name: ${this.name}`;
    }
    getId() {
        return this.id;
    }
}
class Classroom {
    constructor() {
        this.students = [];
    }
    showStudent() {
        console.log(`Danh sach hoc sinh`);
        this.students.forEach(st => {
            console.log(st.getInfo());
        });
    }
    addStudent(stdent) {
        this.students.push(stdent);
    }
    filterStudent(id) {
        return this.students.filter(e => e.getId() === id);
    }
    addStudentInClass(id) {
        const index = allStudents.findIndex(s => s.getId() == id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    }
}
let allStudents = [];
allStudents.push(new Student(1, "tien"));
allStudents.push(new Student(2, "huy"));
allStudents.push(new Student(3, "trang"));
allStudents.push(new Student(4, "duy"));
allStudents.push(new Student(5, "df"));
allStudents.push(new Student(6, "nhung"));
let class1 = new Classroom();
let class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);
class1.showStudent();
class2.showStudent();
console.log(allStudents);
