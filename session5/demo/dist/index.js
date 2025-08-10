//khoi tao nguyen mau ban dau    
class Person {
    constructor(name, _age, email) {
        this.name = name;
        this._age = _age;
        this.email = email;
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        if (newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.log(`invalit age`);
        }
    }
    showInfo() {
        console.log(`Name:${this.name}, Age: ${this._age}, email:${this.email}`);
    }
}
//khoi tao lop con ke thau tu lop cha
class student extends Person {
    showEmail() {
        console.log(`Email:${this.email}`);
    }
}
//khoi tao doi tuong tu lop cha 
const person = new Person("rikkei", 2, "reiasd@hadsf");
//public : truy cap va chinh su adc
console.log(`truy cap thuoc tinh name vs public:`, person.name);
person.name = "PTIT";
console.log(`thay doi thuoc tinh ->`, person.name);
//private-ko the thay doi hay truy cap truc tiep
// console.log(person._age);->loi ko the truy cap truc tiep
//getter- lay gia tri cua bien private thong qua get
console.log(`Truy cap gia tri cua bien private: `, person.age);
//setter: thay doi gia tri dua tren dieu kien set ban dau 
person.age = -12;
person.age = 35;
console.log(person.age);
