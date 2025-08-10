class Employee{
    name : string 
    protected company: string
    private phone: number
    constructor(name: string, company: string, phone : number){
        this.name = name,
        this.company = company,
        this.phone = phone
    }
    printInfo(){
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone : ${this.phone}`);
    }
}
let employe = new Employee("Tiẹn", "NVDIA", 13412)
employe.printInfo()