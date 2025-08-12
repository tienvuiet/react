class Account {
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() {
        console.log(`trang thai dang nhap`);
    }
    logout() {
        if (this.isLogin === true) {
            console.log(`Dang xuat thanh cong`);
            this.isLogin = false;
        }
        else {
        }
    }
    getPassword() {
        return this.password;
    }
}
class UserAcc extends Account {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        super.login();
        if (this.status === "active") {
            console.log(`cho phep dang nhap`);
            this.isLogin = true;
        }
        else if (this.status === "banned") {
            console.log(`tai khoan da bi khoa`);
        }
    }
}
const userAcc = new UserAcc(1, "tien", "132af", true, "CEO", "active");
userAcc.login();
userAcc.logout();
