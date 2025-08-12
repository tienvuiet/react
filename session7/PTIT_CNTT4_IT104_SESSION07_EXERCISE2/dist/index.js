class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        console.log(`toc do sau khi giam ${this.speed -= 10}`);
    }
    speedUp() {
        console.log(`toc do sau khi tang ${this.speed += 10}`);
    }
    showSpeed() {
        console.log(`toc do hien tai ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`name: ${this.name}, speed: ${this.speed},id: ${this.id}, gear: ${this.gear} `);
    }
}
const moto = new Vehicle("xe tang", 12, 3);
moto.showSpeed();
moto.slowDown();
moto.speedUp();
const xedap = new Bicycle("xe dap", 12, 3, 4);
xedap.showSpeed();
xedap.showInfo();
