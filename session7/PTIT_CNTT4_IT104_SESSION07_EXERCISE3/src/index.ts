abstract class Animal {
    constructor(public name: string){}
    abstract makeNoise()
    printName():string{
        return this.name
    }
}
class Cat extends Animal{
    constructor(name: string){super(name)}
    makeNoise() {
        console.log(`con ${this.name} keu Meo meo`);
    }
}
class Dog extends Animal{
    constructor(name: string){super(name)}
    makeNoise() {
        console.log(`con ${this.name} keu Gau gau`);
    }
}
const cat = new Cat("meo")
cat.makeNoise()

