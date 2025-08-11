class Student {
    private id: number
    private name: string
    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
    getInfo():string{
        return `id: ${this.id}, name: ${this.name}`
    }
    getId(): number{
        return this.id
    }
    setById(name: string){
        this.name = name
    }
}
class Classroom {
    students: Student[] = [];
    showStudent (){
        console.log(`Danh sach hoc sinh`);
        this.students.forEach(st=>{ 
            console.log(st.getInfo());
        })
    }
    addStudent(stdent:Student){
        this.students.push(stdent)
    }
    filterStudent(id:number): Student[]{
        return this.students.filter(e=>e.getId()===id)
    }
    addStudentInClass(id: number){
        const index = allStudents.findIndex(s=>s.getId()==id);
        if(index!==-1){
          this.students.push(allStudents[index])
          allStudents.splice(index,1)
        }
    }
    removeStudent(id:number){
        const index = this.students.findIndex(s=>s.getId()===id);
        if(index!==-1){
            allStudents.push(this.students[index])
            this.students.splice(index,1)
        }
    }
    editStudent(id:number, name:string){
        const index  = this.students.findIndex(s=>s.getId()===id)
        if(index !==-1){
            this.students[index].setById(name)
        }
    }

}
let allStudents: Student[] = []
allStudents.push(new Student(1,"tien"))
allStudents.push(new Student(2,"huy"))
allStudents.push(new Student(3,"trang"))
allStudents.push(new Student(4,"duy"))
allStudents.push(new Student(5,"df"))
allStudents.push(new Student(6,"nhung"))
let class1 = new Classroom()
let class2 = new Classroom()
class1.addStudentInClass(1)
class1.addStudentInClass(2)
class1.addStudentInClass(3)

class2.addStudentInClass(4)
class2.addStudentInClass(5)
class2.addStudentInClass(6)

class1.showStudent();
class2.showStudent();
console.log(allStudents);

class1.removeStudent(1)
console.log(allStudents);
class1.editStudent(3,"da chinh sua")

class1.showStudent();