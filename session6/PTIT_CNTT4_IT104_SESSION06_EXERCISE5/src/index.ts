interface changeSpeed{
    speedUp():string
    slowDown():string
    stop(): string 
}
class Vehicle implements changeSpeed{
    private speed:number
    constructor(tocdo:number ){
        this.speed = tocdo
    }
    speedUp():string{
        this.speed+=10
        return `tang toc do ${this.speed}`
    }
    slowDown():string{
        this.speed -= Math.max(0,this.speed-10)
        return `giam toc do ${this.speed}`
    }
    stop():string{
        this.speed = 0;
        return `dua toc do ve ${this.speed}`
    }
}
const car = new Vehicle(23)
console.log(car.speedUp());
