// declaration function
function sayHi(name){
    console.log(`Xin chao ${name}`);
    
}
sayHi("rikkei education");

//expression function
const sayHello = function sayHello(name){
    console.log(`xin chao ${name}`);
}
sayHello("PTIT");


// arrow function
//khong co tham so 
const say = ()=> console.log("hello");
say()
//co mot tham so 
const greaat = name => `Xin chao ${name}`
console.log(greaat("rekkei education"));
//nhieu tham so 
const sum = (a, b)=> a+b// sau mui ten thay cho tu khoa return 
console.log(sum(2,3));


const sum1 = (a, b)=>({a: a,b: b})
console.log(sum1(2,5));


let arr = [1,2,3,4]
//outPut : [2,4,6,8]
let result = arr.map(e=>e*2)
console.log(result);

let arr1 = [1,2,3,4]
let [a,...rest]= arr1
console.log(rest);


// destrucring Object
let course ={
    name: "javascript",
    price: 1000,
    teacher: {
        name:"Tran Minh cuong"
    }
}
let {name:parentName,price, teacher:{name:childrenName}}= course;
console.log(parentName);
console.log(price);
console.log(childrenName);


//rest parameter
function multy(...numbs){
    return numbs.map((e)=>e*2);

}
console.log(multy(1,2,3,3,4,5,5,6));


// spread operator
let b = [1,2,3];
let c = [4,5,6];
let resultt = [...b,...c];
console.log(resultt);

let d = [1,2,3];
let e = [...d];
let f = d;
d.push(4);//[1,2,3,4]
console.log(e);
console.log(f);


//spread (object)
let student = {
    name: "rekkei",
    email: "rikkei.vn",
    phone: "0912123123"
}
let updateStudent = {
    address: "18 phan hung",
}
let myUpdateStudent = {...student, ...updateStudent}
console.log(myUpdateStudent);

//default parametrer
function sayHelloo(name = "myName"){
    console.log(`Xin chao ${name}`);
}
sayHelloo();
sayHelloo("rikke")

//nguyen mau 
class User{
    constructor(name, email, role){
        this.name = name;
        this.email = email;
        this.role = role;
    }
}
//lop con: admin 
class Admin extends User{
    constructor(name, email){
        super(name, email, "admin");
    }
}
class Customer extends User{
    constructor(name, email){
        super(name, email, "custemer");
    }
}
//doi tuong admin 
const admin = new Admin ("Rikkei", "rikkei@edu.vn");
console.log(admin);
const customer = new Customer("NXB", "afasdf@gmail.com");
console.log(customer);


import {PI} from "./math.js";
console.log(PI);
console.log(sum(2,3));

//lay tat ca
import * as math from "./math.js";
console.log(math.PI);
console.log(math.sum(2,3));

