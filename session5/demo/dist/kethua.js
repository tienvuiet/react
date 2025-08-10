console.log(`--------ke thua`);
class User {
    constructor(name) {
        this.name = name;
    }
    getInfo() {
        console.log(`userName: ${this.name}`);
    }
}
//child Class ke thua tu lop cha 
class Admin extends User {
    constructor(name, permission) {
        super(name);
        this.permission = permission;
    }
    getInfo() {
        console.log(`Admin Name: ${this.name}, Permission: ${this.permission}`);
    }
}
class customer extends User {
    constructor(name, membership) {
        super(name);
        this.nembership;
    }
    getInfo() {
        console.log(`Member name: ${this.name}, Membership: ${this.nembership}`);
    }
}
//khoi tao doi tuong
const user = [
    new Admin("rikkei Education", "full access"),
    new customer("Tran Minh Cuong", "browze")
];
//goi phuong thuc tu bien kieu cha
user.forEach((user) => user.getInfo());
