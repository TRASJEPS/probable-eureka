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

const ninja1 = new Ninja("Slick","McSlash");

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake().drinkSake().drinkSake().drinkSake().drinkSake();
ninja1.showStats();