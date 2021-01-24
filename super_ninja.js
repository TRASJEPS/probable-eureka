// TRAVIS JEPSON 2021
//
//
class Ninja
{
    constructor(first_name, last_name, health = 0, speed = 3, strength = 3)
    {
        this.first_name = first_name;
        this.last_name = last_name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName()
    {
        console.log(
            `This Ninja's Name is: ${this.first_name} ${this.last_name}`);
          return this;
    }
    showStats()
    {
        console.log(
            `This Ninja's Name is: ${this.first_name} ${this.last_name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
          return this;
    }
    drinkSake()
    {
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja
{
    constructor(first_name, last_name, health = 200, speed = 10, strength = 10, wisdom = 10)
    {
        super(first_name, last_name, health, speed, strength);
        this.wisdom = wisdom;
    }
    sayName()
    {
        console.log(
            `This Ninja's Name is: ${this.first_name} ${this.last_name}`);
          return this;
    }
    showStats()
    {
        console.log(
            `This Ninja's Name is: ${this.first_name} ${this.last_name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
          return this;
    }
    speakWisdom()
    {
        super.drinkSake()
        console.log(
            `"I accidentally the whole code.  Is that bad?"`);
        return this;
    }
}

const ninja1 = new Ninja("Slick","McSlash");
const sensei1 = new Sensei("Master","Jangwoh");

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake().drinkSake().drinkSake().drinkSake().drinkSake();
ninja1.showStats();

sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom().speakWisdom().speakWisdom().speakWisdom().speakWisdom();
//THIS CALLS THE NINJA drinkSake() METHOD BUT IT ADDS HEALTH TO THE SENSI.
sensei1.showStats();
//THESE STATS SHOULD STAY THE SAME.
ninja1.showStats();