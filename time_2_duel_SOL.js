//TTD SOL

class Card 
{
  constructor(name, cost) 
  {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, res) 
  {
    super(name, cost);
    this.power = power;
    this.res = res;
  }

  attack(target) 
  {
    target.res -= this.power;
    console.log(
      `${this.name} attacks the ${target.name} for ${this.power} damage!`
    );
  }
}

class Effect extends Card 
{
  constructor(name, cost, stat, magnitude, text) 
  {
    super(name, cost);
    this.stat = stat;
    this.magnitude = magnitude;
    this.text = text;
  }

  play(target) {
    if (target instanceof Unit) 
    {
      target[this.stat] += this.magnitude;
      console.log(`The ${this.name} was played on ${target.name}`);
      console.log(this.text);
    } 
    else 
    {
      throw new Error("Target must be a unit!");
    }
  }
}

// turn 1
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgo = new Effect(
  "Hard Algorithm",
  2,
  "res",
  3,
  "increase target's resilience by 3"
);
hardAlgo.play(redBeltNinja);

// turn 2
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandledPromise = new Effect(
  "Unhandled Promise Rejection",
  1,
  "res",
  -2,
  "reduce target's resilience by 2"
);
unhandledPromise.play(redBeltNinja);

// turn 3
const pairProgramming = new Effect(
  "Pair Programming",
  3,
  "power",
  2,
  "increase target's power by 3"
);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);