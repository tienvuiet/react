class Employee{
    constructor(public name: string, protected company: string, private phone: string ){}
    printInfo(){
        console.log(`name: ${this.name}, company: ${this.company}, phone: ${this.phone}`);
    }
    getPhone():string{
        return this.phone
    }
}
class Manager extends Employee{
    constructor(name: string, company: string, phone: string, public teamSize: number){ 
        super(name, company, phone)
    }
    override printInfo(): void {
        super printInfo()
        console.log(`teamSize: ${this.teamSize}`);
    }
}
const emp = new Employee("tien", "dev","09243234")
emp.printInfo()
const man = new Manager("tien" , "dev", "0913133", 3)
man.printInfo()