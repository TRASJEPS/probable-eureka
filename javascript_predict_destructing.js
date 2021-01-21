// TRAVIS JEPSON 2021

// #1 DONE.
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// Tesla
// Mercedes

// NOTES: randomCar calls slot 0 in the cars array and ,otherRandomCar calls slot 1


// #2 DONE.
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// ERROR on line 25, says name is not defined
// name is used by TWO const

// #3 DONE.
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// 12345
// undefined

// hashedPassword HAS NO VALUE ASSIGNED TO IT.


// #4 DONE.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// false
// true

// NOTES:
// 2 == 5 is FALSE.
// compares numbers[1] to numbers[3]
// COMPARES numbers ARRAY SLOT 1 to SLOT 8, CHECKING IF VALUE OF EACH
// SLOT ARE EQUAL WITH ==  TRIES TO TRICK YOU WHEN third IS numbers[8]

// #5 DONE.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// value
// [1, 5, 1, 8, 3, 3]
// 1
// 5

// NOTES:
// CALLS key
// CALLS secondKey WHOLE ARRAY
// CALLS SLOT [0] of secondKey
// CALLS willThisWork THAT IS DEFINED as slot [1] in secondKey