class BankAccount {
  constructor(intRate = 0.08, balance = 0) {
    this.balance = balance;
    this.intRate = intRate;
  }
  deposit(amount) {
    this.balance += amount;
    return this;
  }
  withdraw(amount) {
    this.balance -= amount;
    if (this.balance < 0) {
      console.log("Insufficient funds: Charging a $5 fee");
      this.balance -= 5;
    }
    return this;
  }
  displayAccountInfo() {
    console.log(
      `Current Balance: $${this.balance}, Interest Rate: ${this.intRate}`
    );
    return this;
  }
  yieldInterest() {
    this.balance += this.balance * this.intRate;
    return this;
  }
}

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.account = new BankAccount();
  }

  makeDeposit(amount) {
    this.account.deposit(amount);
    return this;
  }

  makeWithdrawal(amount) {
    this.account.withdraw(amount);
    return this;
  }

  displayInfo() {
    console.log(
      `Name: ${this.name}, Account Balance: $${this.account.balance}, Interest Rate: ${this.account.intRate}`
    );
    return this;
  }
}

const crow = new User("Crow T. Robot", "hamdingers@gizmonic.com");
const tom = new User("Tom Servo", "tommonster@gizmonic.com");

tom.makeDeposit(200);