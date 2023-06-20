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
    
    }

    bankBalance(){
        return this.balance
    }

    printStatement(){
        // console.log('date || credit || debit || balance')
        const date = this.transaction[0].date
        const credit = this.transaction[0].credit
        const debit = this.transaction[0].debit
        const balance = this.transaction[0].balance 


        return `
        date || credit || debit || balance
        ${date} || ${credit} ||${debit}|| ${balance} 
        ` 
    

    }
}

module.exports = Account;