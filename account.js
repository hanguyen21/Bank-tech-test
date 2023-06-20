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

    // printStatement(){
    //     console.log('date || credit || debit || balance')
    //     this.transaction.forEach(transaction => {
    //             let date = transaction.date
    //             let credit = transaction.credit
    //             let debit = transaction.debit
    //             let balance = transaction.balance
    //     console.log(`${date} || ${credit} ||${debit}|| ${balance}`);
    //     }); 
    printStatement() {
        let statement = ['date || credit || debit || balance'];
        this.transaction.forEach(transaction => {
            let date = transaction.date;
            let credit = transaction.credit ? transaction.credit.toFixed(2) : '' ;
            let debit = transaction.debit ? transaction.debit.toFixed(2) : '' ;
            let balance = transaction.balance.toFixed(2);
            statement.push(`${date} || ${credit} ||${debit}|| ${balance}`);
        });
        return statement.join('\n');
    }
    
        }
        // console.log('date || credit || debit || balance')
        // const date = this.transaction[0].date
        // const credit = this.transaction[0].credit
        // const debit = this.transaction[0].debit
        // const balance = this.transaction[0].balance 


        // return `
        // date || credit || debit || balance
        // ${date} || ${credit} ||${debit}|| ${balance} 
        // ` 
    



module.exports = Account;