class Account {
    constructor (balance = 0) {
        this.balance = balance;

    }

    deposit(amount){
        this.balance += amount
    }

    withdrawal(amount){
        this.balance -= amount
    }

    bankBalance(){
        return this.balance
    }
}

module.exports = Account;