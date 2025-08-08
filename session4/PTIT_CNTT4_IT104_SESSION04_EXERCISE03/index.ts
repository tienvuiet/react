type Student ={
   name : string ,
   age: number,
   email: string ,
}
const printName = (student:Student):string=>{
     return `Ten toi la ${student.name}, toi ${student.age} va email cua toi la ${student.email}`
}
const used:Student={
    name: "tien",
    age:19,
    email:"tienxinhzai241@gmail.com"
}
console.log(printName(used));
