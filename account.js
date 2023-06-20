class Account {
    constructor (balance) {
        this.balance = 0;
        this.transaction = [];

    }

    deposit(amount){
        this.balance += amount;
        const depositTransaction = {
            date: (new Date()).toLocaleDateString('en-GB'),
            credit: amount,
            debit: '',
            balance: this.balance
          };
          this.transaction.push(depositTransaction);
          console.log(this.transaction);
    }

    withdrawal(amount){
        this.balance -= amount;
        const withdrawalTransaction = {
            date: (new Date()).toLocaleDateString('en-GB'),
            credit: '',
            debit: amount,
            balance: this.balance
          };
          this.transaction.push(withdrawalTransaction);
          console.log(this.transaction);
    }

    bankBalance(){
        return this.balance
    }

    printStatement(){
        console.log('date || credit || debit || balance')
        return this.transaction
    

    }
}

module.exports = Account;