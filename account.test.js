const Account = require('./account')

describe('Account class', () => {
  it('client can make a deposit', () => {
    const account = new Account()
    account.deposit(1000)
    expect(account.bankBalance()).toEqual(1000)
  })

  it('client can make a withdrawal', () => {
    const account = new Account()
    account.deposit(1000)
    account.withdrawal(500)
    expect(account.bankBalance()).toEqual(500)
  })

  it('client can make a deposit with a date', () => {
    const account = new Account()
    account.deposit(1000)
    expect(account.bankBalance()).toEqual(1000)
    expect(account.transaction[0])
      .toEqual({ date: (new Date()).toLocaleDateString('en-GB'), credit: 1000, debit: '', balance: 1000 })
  })

  it('client can make a withdrawal with a date', () => {
    const account = new Account()
    account.deposit(1000)
    account.withdrawal(500)
    expect(account.bankBalance()).toEqual(500)
    expect(account.transaction[1])
      .toEqual({ date: (new Date()).toLocaleDateString('en-GB'), credit: '', debit: 500, balance: 500 })
  })

  it('clients can print their bank statement', () => {
    const account = new Account()
    account.deposit(1000)
    expect(account.printStatement()).toContain('date || credit || debit || balance')
  })

  it('clients view their bank statement with the balance', () => {
    const account = new Account()
    account.deposit(1000)
    account.printStatement()
    expect(account.printStatement()).toContain('date || credit || debit || balance')
    expect(account.printStatement()).toContain('1000')
  })

  it('client can view bank Statement with the balance is a float', () => {
    const account = new Account()
    account.deposit(1000)
    expect(account.printStatement()).toContain('date || credit || debit || balance')
    expect(account.printStatement()).toContain('1000.00')
  })
})
