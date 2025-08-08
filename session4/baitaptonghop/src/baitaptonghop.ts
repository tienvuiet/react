type Subject ={
    subjectName :string,
    score: number|string
}
//thong tin 1 sinh vien
type Student = {
    id: number,
    name:string,
    age: number,
    subject: Subject[]
}
//mang chua dannh sach sinh vine
let student : Student[] =[];
//tao ham them thong tin sv
function addStudent(id:number, name : string, age:number, subject:Subject[]){
    const newStudent = {    
        id: id,
        name: name,
        age: age,
        subject: subject
    }
    student.push(newStudent)
}
addStudent(1,"tien",20,[{subjectName: "C",score:"B"},{subjectName: "CTDLGt",score:"B"}])
addStudent(1,"tien",20,[{subjectName: "D",score:"B"}])
//tao ham hien thi thong tin sinh vien 
function printStudent():void{
   for(let i =0 ; i< student.length; i++){
    console.log(`thong tin sinh vien thu ${i+1}: Name_${student[i].name}`);
    
   }
}

//ham cap nhat sv
function updateStudent(id:number){
    //lei
}
//xoa sv
function deleteSudent(id:number){
    
}