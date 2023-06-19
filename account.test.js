const Account = require('./account')

describe('Account class', () => {
  it('client can make a deposit', () => {
    const account = new Account();
    account.deposit(1000);
    expect(account.bankBalance()).toEqual(1000)
  });

  it('client can make a withdrawal', () => {
    const account = new Account();
    account.deposit(1000);
    account.withdrawal(500);
    expect(account.bankBalance()).toEqual(500)
  });
});