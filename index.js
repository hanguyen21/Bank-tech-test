const Bank = require('./bank.js');

const bank = new Bank();

bank.credit(1000, '10/01/2023');
// bank.credit(2000, '13/01/2023');
bank.debit(500, '14/01/2023')
console.log(bank.statement());

// const Transaction = require('./bank')

// const ab = new Transaction('12/01/2023', 1000, 0);
// console.log(ab)