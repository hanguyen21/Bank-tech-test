const Account = require('./account.js');

const account= new Account();

account.deposit(1000);
// bank.credit(2000, '13/01/2023');
// bank.debit(500, '14/01/2023')
console.log(account.bankBalance());