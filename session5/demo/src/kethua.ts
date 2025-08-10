console.log(`--------ke thua`);

class User{
    protected name: string
    constructor(name: string){
        this.name = name;
    }
    getInfo():void {
        console.log(`userName: ${this.name}`);
    }
}
//child Class ke thua tu lop cha 
class Admin extends User{
    private permission : string;
    constructor(name : string, permission : string){
        super(name)
        this.permission = permission
    }
    getInfo():void{
        console.log(`Admin Name: ${this.name}, Permission: ${this.permission}`);
        
    }
}
class customer extends User{
    private nembership : string
    constructor(name: string, membership:string){
        super(name)
        this.nembership
    }
    getInfo():void {
        console.log(`Member name: ${this.name}, Membership: ${this.nembership}`);
        
    }
}
//khoi tao doi tuong
const user :User[]=[    
    new Admin ("rikkei Education", "full access"),
    new customer("Tran Minh Cuong", "browze")
]
//goi phuong thuc tu bien kieu cha
user.forEach((user)=>user.getInfo());