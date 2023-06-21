# Bank-tech-test

### Setting up a JavaScript project

- npm init -y
- npm add jest
- npm install -g jest
- npm install -g jest esbuild
- npm install jest-environment-jsdom

## Run the test

- jest

## Run the code

- node index.js

## Install ESLint

- Use 'npm install eslint --global' to install ESLint globally.
- Go to your project in the terminal and run 'eslint --init' to initiate and setup linting for your project.
- You can also run this command directly using 'npm init @eslint/config':
  ✔ How would you like to use ESLint? · style
  ✔ What type of modules does your project use? · esm
  ✔ Which framework does your project use? · none
  ✔ Does your project use TypeScript? · No / Yes
  ✔ Where does your code run? · browser
  ✔ How would you like to define a style for your project? · guide
  ✔ Which style guide do you want to follow? · standard
  ✔ What format do you want your config file to be in? · JavaScript

## Bank tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time. This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

### My approach

- My JavaScript code models a basic bank account system, applying object-oriented programming (OOP) concepts.

- Object-Oriented Programming (OOP): The Account class is used to create account objects. This class encapsulates the properties and methods related to a bank account. Each account object will have its own balance and transaction history.

- Constructor and Properties: The constructor is a special method that's called when a new object is created. In the Account class, the constructor initializes two properties: balance and transaction. Balance is the current amount of money in the account, initially set to 0. Transaction is an array to store the history of all transactions.

- Methods: There are four main methods in the Account class: deposit, withdrawal, bankBalance, and printStatement.

- deposit: This method takes an amount as an argument and adds it to the balance. It then creates a new transaction object representing the deposit and adds it to the transaction history.

- withdrawal: This method works similarly to the deposit method but it subtracts the amount from the balance instead of adding it. The withdrawal is also recorded in the transaction history.

- bankBalance: This is a simple getter method that returns the current balance of the account.

- printStatement: This method generates and returns a formatted bank statement, including the date, credit amount, debit amount, and balance for each transaction. The transactions are listed in reverse chronological order.

- Modularity and Encapsulation: The Account class is exported as a module at the end of the file, allowing it to be imported and used in other JavaScript files. This promotes modularity and encapsulation in the code.

- Usage: In the index.js file, an Account object is created and used to perform a series of deposits and a withdrawal. Then, a bank statement is generated and logged to the console.

  <img width="452" alt="screenshot1" src="https://github.com/hanguyen21/Bank-tech-test/assets/111558835/0da2cb97-6f91-4f45-9deb-2e94daa37473">
