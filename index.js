const Account = require('./account.js');

const account= new Account();

account.deposit(1000);
account.deposit(2000);
account.withdrawal(500);

console.log(account.printStatement());
