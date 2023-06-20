const Account = require('./account.js');

const account= new Account();

account.deposit(1000);
account.deposit(2000);
account.withdrawal(500);
// account.withdrawal(500, '14/01/2023')
console.log(account.printStatement());
