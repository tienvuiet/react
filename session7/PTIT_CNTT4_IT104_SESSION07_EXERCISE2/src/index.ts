class Vehicle {
    constructor(
        protected name: string,
        protected speed: number,
        protected id: number,
    ) { }
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
    constructor(name: string, speed: number, id: number, private gear: number) {
        super(name, speed, id)
    }
    showInfo() {
        console.log(`name: ${this.name}, speed: ${this.speed},id: ${this.id}, gear: ${this.gear} `);
    }
}
const moto = new Vehicle("xe tang", 12, 3)
moto.showSpeed()
moto.slowDown()
moto.speedUp()
const xedap = new Bicycle("xe dap", 12, 3, 4)
xedap.showSpeed()
xedap.showInfo()