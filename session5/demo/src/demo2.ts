console.log(`------------demo2`);
    
class BankAtCount {
    private balance:number
    constructor(initBalance: number){
        this.balance = initBalance
    }
    //getter
    getBalance():number{
       return this.balance
    }
    //mathod nap tien
    deposit(amount: number){
        if(amount>0){
            this.balance+=amount
        }else{
            console.log(`invalid deposit amount`);
            
        }
    }
    //method - rut tien
    withdraw(amount:number){
        if(amount>0&&amount<= this.balance){
            this.balance-= amount
        }else{
            console.log(`invalid withdraw amount`);
            
        }
    }
}

//khoi tao doi tuong 
const myAcount = new BankAtCount(1000);

console.log(`lay so du tai khoan qua get()`,myAcount.getBalance());
myAcount.deposit(999);
console.log(`so du sau khi nap tien`, myAcount.getBalance());
myAcount.withdraw(-9);
