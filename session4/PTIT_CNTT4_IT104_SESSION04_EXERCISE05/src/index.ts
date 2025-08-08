type Person={
    name : string,
    age: number
}
type Employee={
    employeeId : number,
    department: string
}
type StaffMember = Person & Employee
const  printStaffInfo = (name:string, age:number, employeeId: number, department:string):string=>{
    return `${name}(${age} tuoi), ma sinh vien ${employeeId}- phong ${department} `
}
console.log(printStaffInfo("vu viet tien", 19, 1312123,"phong ke toan"));
