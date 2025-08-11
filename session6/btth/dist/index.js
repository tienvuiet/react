//tao abstract class Animal
class Animal {
    constructor(name, age, category) {
        this.name = name,
            this.age = age;
        this.category = category;
    }
    sound() {
        return ``;
    }
    getDetail() {
        return ``;
    }
    move() {
        return ``;
    }
    feed() {
        return ``;
    }
}
//tao cac class con ke thua class Animal
class Mammal extends Animal {
    constructor(name, age, fulColor) {
        super(name, age, fulColor);
        this.name = name;
        this.age = age;
        this.furColor = fulColor;
    }
    move() {
        return `chay`;
    }
    getFulcolor() {
        return `mau long cua loai ${this.name} la: ${this.furColor}`;
    }
}
class Brid extends Animal {
    constructor(name, age, wingSpan) {
        super(name, age, wingSpan);
        this.name = name;
        this.age = age;
        this.wingSpan = wingSpan;
    }
    move() {
        return `bay`;
    }
    getWingSpan() {
        //lay thong tin sai canh cua loai chim
        return `sai canh cua loai  ${this.name} la: ${this.wingSpan}`;
    }
}
class Reptile extends Animal {
    constructor(name, age, venormous) {
        super(name, age, venormous);
        this.name = name;
        this.age = age;
        this.venormous = venormous;
    }
    move() {
        return `bo`;
    }
}
//tinh da hinh la cung 1 phuong thuc nhung trien khai khac nhau 
const animals = [
    new Brid("Bird", 2, 3),
    new Mammal("Mammal", 3, "xanh"),
    new Reptile("Ran", 3, true)
];
//goi phuong thuc
animals.forEach(item => {
    //thong tin cac di chuyen cua cac loai
    console.log(item.move());
    //thong tin mau long 
});
//in thong tin mau long cua loai 
const new_animal = new Mammal("con lon", 1, "xn");
console.log(new_animal.getFulcolor());
