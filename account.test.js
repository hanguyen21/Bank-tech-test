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

  it('client can make a deposit with a date', () => {
    const account = new Account();
    account.deposit(1000, '10-01-2023');
    expect(account.bankBalance()).toEqual(1000);
    expect(account.printStatement()).toContain('10-01-2023');
  });

  it('client can make a withdrawal with a date', () => {
    const account = new Account();
    account.deposit(1000, '10-01-2023');
    account.withdrawal(500, '14-01-2023');
    expect(account.bankBalance()).toEqual(500);
    expect(account.printStatement()).toContain('14-01-2023');
  });
});