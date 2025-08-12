class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        return this.name;
    }
}
class Cat extends Animal {
    constructor(name) { super(name); }
    makeNoise() {
        console.log(`con ${this.name} keu Meo meo`);
    }
}
class Dog extends Animal {
    constructor(name) { super(name); }
    makeNoise() {
        console.log(`con ${this.name} keu Gau gau`);
    }
}
const cat = new Cat("meo");
cat.makeNoise();
