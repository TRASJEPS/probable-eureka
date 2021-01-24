// TRAVIS JEPSON 2021
//
//
class User
{
    // No need for constructor to be including account balance because its set for 0
    // These three are required arguements
    constructor(userFirstName, userLastName, userEmailAddress)
    {
        this.firstName = userFirstName
        this.lastName = userLastName
        this.email = userEmailAddress
        this.created_at = createdAt
        this.updated_at = updatedAt
    }
    
}

class BankAccount {
    constructor(interestRate = 0.09, accountBalance = 0) 
    { 
        this.interestRate = userInterestRate;
        this.accountBalance = userAccountBalance;
    }
    makeDeposit(amount)
    {
        this.userAccountBalance += amount;
        return this;
    }
    makeWithdrawal(amount)
    {
        this.userAccountBalance -= amount;
        if(this.userAccountBalance < 0)
        {
            console.log(`Hello ${this.firstName} ${this.lastName}, your current account balance is: $${this.userAccountBalance}.`);
            this.balance -= 5.00;
        }
        return this;
    }
    displayBalance()
    {
        console.log(`Hello ${this.firstName} ${this.lastName}, your current account balance is: $${this.userAccountBalance}.`)
    }
    interestEarned() 
    {
        this.userAccountBalance += this.userAccountBalance * this.userInterestRate
    }
}

const user1_billy = new User("Billy","McCarthy","cars@hotmail.gov")
const user2_sally = new User("Sally","SueHanny","smallCATSrCOOL@myspace.org")
const user3_moneyBags = new User("Captain","MoneyBags","iwonderwhatthepoorpeopleareupto@comcast.net")

user1_billy.makeDeposit(1200.00).makeDeposit(7800.67).makeDeposit(2200.54).makeWithdrawal(1337.00).displayBalance()
user2_sally.makeDeposit(4311.54).makeDeposit(669.54).makeWithdrawal(14.00).makeWithdrawal(800.08).displayBalance()
user3_moneyBags.makeDeposit(9001.33).makeWithdrawal(600.00).makeWithdrawal(330.65).makeWithdrawal(889.33).displayBalance()