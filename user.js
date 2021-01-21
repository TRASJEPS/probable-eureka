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
        this.accountBalance = 0
    }
    makeDeposit(amount)
    {
        this.accountBalance += amount;
    }
    makeWithdrawal(amount)
    {
        this.accountBalance -= amount;
    }
    displayBalance()
    {
        console.log(`Hello ${this.name}, your current account balance is: $${this.accountBalance}.`)
    }
}

const user1_billy = new User("Billy","McCarthy","cars@hotmail.gov")
const user2_sally = new User("Sally","SueHanny","smallCATSrCOOL@myspace.org")
const user3_moneyBags = new User("Captain","MoneyBags","iwonderwhatthepoorpeopleareupto@comcast.net")

user1_billy.makeDeposit(1200.00)
user1_billy.makeDeposit(7800.67)
user1_billy.makeDeposit(2200.54)
user1_billy.makeWithdrawal(1337.00)
//console.log(user1_billy.accountBalance)
user1_billy.displayBalance()

user2_sally.makeDeposit(4311.54)
user2_sally.makeDeposit(669.54)
user2_sally.makeWithdrawal(14.00)
user2_sally.makeWithdrawal(800.08)
//console.log(user2_sally.accountBalance)
user2_sally.displayBalance()

user3_moneyBags.makeDeposit(9001.33)
user3_moneyBags.makeWithdrawal(600.00)
user3_moneyBags.makeWithdrawal(330.65)
user3_moneyBags.makeWithdrawal(889.33)
//console.log(user3_moneyBags.accountBalance)
user3_moneyBags.displayBalance()