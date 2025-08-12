class Account {
    constructor(accountNumber, banlance, history, status) {
        this.accountNumber = accountNumber;
        this.banlance = banlance;
        this.history = history;
        this.status = status;
    }
    deposit(tien) {
        this.banlance += tien;
        this.history.push(`+${tien}`);
    }
    withdraw(tien) {
        if (this.banlance < tien) {
            console.log(`rut dung so tien trong tai khoan ban ${this.banlance}`);
        }
        else {
            this.banlance -= tien;
            this.history.push(`-${tien}`);
        }
    }
    showHistory() {
        this.history.forEach(e => {
            console.log(e);
        });
    }
}
class SavingAccount extends Account {
    constructor(accountNumber, banlance, history, status, overdraftLimit) {
        super(accountNumber, banlance, history, status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(tien) {
        if (tien < this.overdraftLimit) {
            this.banlance -= tien;
            this.history.push(`-${tien}`);
        }
        else {
            console.log(`khong trong han muc thau chi`);
        }
    }
}
const used = new Account(123123, 12000, [], "active");
used.deposit(300);
used.withdraw(1232132123);
used.withdraw(1221);
used.showHistory();
const used2 = new SavingAccount(1232132, 12000, [], "active", 133213213);
used2.withdraw(3213213123123);
used2.withdraw(321323);
used2.showHistory();
