// TRAVIS JEPSON 2021
//
//
class Player
{
    constructor(name)
    {
        this.name = name;
    }
}
class Card
{
    constructor(card_name, cost, power, resilience)
    {
        this.card_name = card_name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }
    showStats()
    {
        console.log(
            `This Card is: ${this.card_name}, Costs: ${this.cost}, Power Level: ${this.power}, Resilience: ${this.resilience}`);
          return this;
    }
    summon()
    {
        console.log(
            `This Ninja's Name is: ${this.first_name} ${this.last_name}`);
          return this;
    }
    attack(selected)
    {
        selected.resilience -= this.power;
        console.log(
            `The ${this.card_name} attacks ${selected.card_name} for ${this.power} damage!`);
    }
    unhandledPromiseRejectionDebuff()
    {
        this.resilience -= 2;
        return this;
    }
    hardAlgorithmBuff()
    {
        this.resilience += 3;
        return this;
    }
    pairProgrammingBuff()
    {
        this.power += 2;
        return this;
    }
}

class Effect extends Card
{
    constructor(card_name, cost, power, resilience)
    {
        super(card_name, cost, power, resilience);
    }
    hardAlgorithm()
    {
        super.hardAlgorithmBuff()
        this.cost = 2;
        return this;
    }
    unhandledPromiseRejection()
    {
        super.unhandledPromiseRejectionDebuff()
        this.cost = 1;
        return this;
    }
    pairProgramming()
    {
        super.hardAlgorithmBuff()
        this.cost = 3;
        return this;
    }
}

const player1 = new Player("Bob");
const player2 = new Player("Grace");

const red_belt_ninja_card = new Card("Red Belt Ninja", 3, 3, 4);
const black_belt_ninja_card = new Card("Black Belt Ninja", 4, 5, 4);
const rekt_card = new Card("l33t.", 10, 1337, 10);

red_belt_ninja_card.showStats();
red_belt_ninja_card.hardAlgorithmBuff();
red_belt_ninja_card.showStats();

black_belt_ninja_card.showStats();
red_belt_ninja_card.unhandledPromiseRejectionDebuff();
red_belt_ninja_card.showStats();
red_belt_ninja_card.pairProgrammingBuff();
red_belt_ninja_card.showStats();

red_belt_ninja_card.attack(black_belt_ninja_card);

