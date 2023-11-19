class BankAccount {
    constructor() {
      this._accountNumber = this._generateAccountNumber();
      this._balance = 0;
    }
  
    // Private method to generate a random 10-digit account number
    _generateAccountNumber() {
      return Math.floor(1000000000 + Math.random() * 9000000000).toString();
    }
  
    // Private method to check if an amount is negative
    _isNegative(amount) {
      return amount < 0;
    }
  
    // Private method to check if a withdrawal is valid
    _isValidWithdrawal(amount) {
      return !this._isNegative(amount) && amount <= this._balance;
    }
  
    // Public method to get the current balance
    getBalance() {
      return this._balance;
    }
  
    // Public method to deposit money
    deposit(amount) {
      if (!this._isNegative(amount)) {
        this._balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this._balance}`);
      } else {
        console.log('Invalid deposit amount.');
      }
    }
  
    // Public method to withdraw money
    withdraw(amount) {
      if (this._isValidWithdrawal(amount)) {
        this._balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this._balance}`);
      } else {
        console.log('Invalid withdrawal amount.');
      }
    }
  }
  
  // Usage Example
  const account = new BankAccount();
  console.log('Account Number:', account._accountNumber); // Should not be accessible
  account.deposit(1000);
  account.withdraw(500);
  account.withdraw(-200); // Invalid withdrawal
  