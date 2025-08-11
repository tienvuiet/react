class Vehicle {
    constructor(tocdo) {
        this.speed = tocdo;
    }
    speedUp() {
        this.speed += 10;
        return `tang toc do ${this.speed}`;
    }
    slowDown() {
        this.speed -= Math.max(0, this.speed - 10);
        return `giam toc do ${this.speed}`;
    }
    stop() {
        this.speed = 0;
        return `dua toc do ve ${this.speed}`;
    }
}
const car = new Vehicle(23);
console.log(car.speedUp());
