class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`name: ${this.name}, company: ${this.company}, phone: ${this.phone}`);
    }
    getPhone() {
        return this.phone;
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`teamSize: ${this.teamSize}`);
    }
}
const emp = new Employee("tien", "dev", "09243234");
emp.printInfo();
const man = new Manager("tien", "dev", "0913133", 3);
man.printInfo();
