class Account {
  constructor (balance) {
    this.balance = 0
    this.transaction = []
  };

  deposit (amount) {
    this.balance += amount
    const depositTransaction = {
      date: (new Date()).toLocaleDateString('en-GB'),
      credit: amount,
      debit: '',
      balance: this.balance
    }
    this.transaction.push(depositTransaction)
  }

  withdrawal (amount) {
    this.balance -= amount
    const withdrawalTransaction = {
      date: (new Date()).toLocaleDateString('en-GB'),
      credit: '',
      debit: amount,
      balance: this.balance
    }
    this.transaction.push(withdrawalTransaction)
  }

  bankBalance () {
    return this.balance
  }

  printStatement () {
    const statement = ['date || credit || debit || balance']
    this.transaction.reverse().forEach(transaction => {
      const date = transaction.date
      const credit = transaction.credit ? transaction.credit.toFixed(2) : ''
      const debit = transaction.debit ? transaction.debit.toFixed(2) : ''
      const balance = transaction.balance.toFixed(2)
      statement.push(`${date} || ${credit} ||${debit}|| ${balance}`)
    })
    return statement.join('\n')
  }
};

module.exports = Account
