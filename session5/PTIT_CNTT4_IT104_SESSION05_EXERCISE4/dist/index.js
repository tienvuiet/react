class Vehicle {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    print() {
        console.log(`Name: ${this.name}, year: ${this.year}, company : ${this.company}, id: ${this.id}`);
    }
}
let user1 = new Vehicle("vu viet tien", 2004, "Rikkei", 312);
// user1.id =12   -ko cho gan lai
let user2 = new Vehicle("Trang", 3123, "Rikkei", 23);
user1.print();
user2.print();
