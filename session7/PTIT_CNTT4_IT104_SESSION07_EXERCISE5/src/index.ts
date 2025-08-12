class Account {
    constructor(public id : number, public userName: string, private password: string , public isLogin: boolean, public role: string){}
    login(){
        console.log(`trang thai dang nhap`);
    } 
    logout(){   
        if(this.isLogin===true){
            console.log(`Dang xuat thanh cong`);
            this.isLogin = false
        }else{
        }
    }
    getPassword():string{
        return this.password
    }
}
class UserAcc extends Account{
    constructor(id: number, userName: string, password : string , isLogin: boolean, role: string, public status : string){
        super(id,userName, password, isLogin, role)
    }
    login(): void {
        super.login()
        if(this.status === "active"){
            console.log(`cho phep dang nhap`);
            this.isLogin = true            
        }else if (this.status === "banned"){
            console.log(`tai khoan da bi khoa`);
        }
        
    }
}
const userAcc = new UserAcc(1,"tien", "132af", true, "CEO", "active" )
userAcc.login()
userAcc.logout()