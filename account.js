class Account {
    constructor (balance) {
        this.balance = 0;
        this.transaction = [];

    }

    deposit(amount, date){
        this.balance += amount;
        this.transaction.push(amount, date);
    }

    withdrawal(amount, date){
        this.balance -= amount;
        this.transaction.push(amount, date);
    }

    bankBalance(){
        return this.balance
    }

    printStatement(){
        console.log(this.transaction);
        return this.transaction;

    }
}

module.exports = Account;