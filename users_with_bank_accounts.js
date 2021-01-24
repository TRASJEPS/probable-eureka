// TRAVIS JEPSON 2021
//
//
class BankAccount
{
    constructor(interestRate = 0.09, accountBalance = 0)
    {
        this.interestRate = interestRate;
        this.accountBalance = accountBalance;
    }
    makeBankAccountDeposit(amount)
    {
        this.accountBalance += amount; 
        return this;
    }
    makeBankAccountWithdrawal(amount)
    {
        this.accountBalance -= amount;
        if(this.accountBalance < 0)
        {
            console.log(`Hello ${this.userFirstName} ${this.userLastName}, your current account balance is: $${this.accountBalance}.`);
            this.balance -= 5.00;
        }
        return this;
    }
    displayBankAccountBalance()
    {
        console.log(`Hello ${this.userFirstName} ${this.userLastName}, your current account balance is: $${this.accountBalance}.`)
    }
    interestEarned() 
    {
        this.accountBalance += this.accountBalance * this.userInterestRate;
        return this;
    }
}

class User
{
    // No need for constructor to be including account balance because its set for 0
    // These three are required arguements
    constructor(userFirstName, userLastName, userEmailAddress)
    {
        this.firstName = userFirstName;
        this.lastName = userLastName;
        this.email = userEmailAddress;
        this.account = new BankAccount();
        // this.created_at = createdAt;
        // this.updated_at = updatedAt;
    }
    makeUserDeposit(amount) 
        {
        this.account.makeBankAccountDeposit(amount);
        return this;
        }
    
    makeUserWithdrawal(amount) 
        {
        this.account.makeBankAccountWithdrawal(amount);
        return this;
        }
    // this.firstName and this.lastName do NOT NEED any additional dot.above it because its function is in the USER CLASS
    displayUserInfo() 
        {
        console.log(
          `Name: ${this.firstName} ${this.lastName}, Account Balance: $${this.account.accountBalance}, Interest Rate: ${this.account.interestRate}`
        );
        return this;
        }

}

const user1_billy = new User("Billy","McCarthy","cars@hotmail.gov");
const user2_sally = new User("Sally","SueHanny","smallCATSrCOOL@myspace.org");
const user3_moneyBags = new User("Captain","MoneyBags","iwonderwhatthepoorpeopleareupto@comcast.net");

user1_billy.makeUserDeposit(1200.00).makeUserDeposit(7800.67).makeUserDeposit(2200.54).makeUserWithdrawal(1337.00).displayUserInfo();
user2_sally.makeUserDeposit(4311.54).makeUserDeposit(669.54).makeUserWithdrawal(14.00).makeUserWithdrawal(800.08).displayUserInfo();
user3_moneyBags.makeUserDeposit(9001.33).makeUserWithdrawal(600.00).makeUserWithdrawal(330.65).makeUserWithdrawal(889.33).displayUserInfo();