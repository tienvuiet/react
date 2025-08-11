interface IAnimal{
    name: string, 
    age :number,
    category: string|number|boolean,
    sound(): string;
    getDetail(): string
    move(): string;
    feed():string,
}
//tao abstract class Animal
abstract class Animal implements IAnimal{
    name: string
    age: number
    category: string|number|boolean
    constructor(name: string, age: number, category: string|number|boolean){
        this.name = name,
        this.age = age
        this.category = category
    }
    sound(): string{
        
        return ``
    }
    getDetail(): string{
        return ``
    }
    move(): string{
        return ``
    }
    feed():string{
        return ``
    }
    
}
//tao cac class con ke thua class Animal
class Mammal extends Animal{
    private furColor: string
    constructor(name: string , age: number, fulColor: string){
        super(name, age, fulColor);
        this.name = name
        this.age = age
        this.furColor = fulColor
    }
    move():string{
        return `chay`
    }
    getFulcolor():string{
        return `mau long cua loai ${this.name} la: ${this.furColor}`
    }
}
class Brid extends Animal{
    private wingSpan: number
    constructor(name: string , age: number, wingSpan: number){
        super(name, age,wingSpan);
        this.name = name
        this.age = age
        this.wingSpan = wingSpan
    }
    move():string{
        return `bay`
    }
    getWingSpan():string{
        //lay thong tin sai canh cua loai chim
        return `sai canh cua loai  ${this.name} la: ${this.wingSpan}`
    }
}
class Reptile extends Animal{
    private venormous: boolean
    constructor(name: string , age: number, venormous: boolean){
        super(name, age,venormous);
        this.name = name
        this.age = age
        this.venormous = venormous
    }
    move():string{
        return `bo`
    }
}
//tinh da hinh la cung 1 phuong thuc nhung trien khai khac nhau 
const animals: Animal[]= [  
    new Brid("Bird", 2, 3),
    new Mammal("Mammal", 3, "xanh"),
    new Reptile("Ran", 3, true)
]
//goi phuong thuc
animals.forEach(item=>{
    //thong tin cac di chuyen cua cac loai
    console.log(item.move());
    //thong tin mau long 
    
})
//in thong tin mau long cua loai 
const new_animal = new Mammal("con lon", 1, "xn")
console.log(new_animal.getFulcolor());

