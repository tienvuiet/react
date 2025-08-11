class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Day la loai cv ${this.type} voi muc luong ${this.calculateSalary()}`);
    }
}
class PartimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return this.workingHour * 30000;
    }
}
class FullTimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 100000000;
    }
}
const used1 = new PartimeJob("be co", 3);
console.log(used1.printType());
const used2 = new FullTimeJob("gia su");
console.log(used2.printType());
