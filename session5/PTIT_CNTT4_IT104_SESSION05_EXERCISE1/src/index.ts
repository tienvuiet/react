class Vehicle{
    name : string
    year : number
    company: string
    constructor (name: string, year: number, company : string){
        this.name= name
        this.year = year
        this.company = company
    }
    showInfo(){
        console.log(`name: ${this.name}, nam san xuat: ${this.year}, hang xe: ${this.company}`);
    }
}
const dt1 = new Vehicle("Mescedes", 12, "Oto1")
const dt2 = new Vehicle("Lexus", 13, "oto2")
dt1.showInfo()
dt2.showInfo()
