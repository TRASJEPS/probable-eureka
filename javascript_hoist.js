//#1 DONE.
console.log(hello);                                   
var hello = 'world';

// let hello
// console.log(hello);
// UNDEFINED

//#2 DONE.
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//  var needle = 'haystack';
//  function test()
//  var needle = 'magnet';
//  console.log(needle);

// //#3 DONE.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan = 'super cool';
// console.log(brendan);
// //
// FUNCTION print is defined but NEVER CALLED.


// //#4 DONE.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food = 'chicken';
// console.log(food);
// eat();
// food = 'half-chicken';
// console.log(food);
// food IS DEFINED ABOVE AND GOES INTO THE FUNCTION, THEN AS VAR it is not passed as its already called

// //#5 DONE.
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// IMPROPER function setup, mean() should be function mean()

// //#6 DONE
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// console.log(genre);   //COMES OUT undefined
// rewind();
// console.log(genre);  //rock
// console.log(genre);  //r&b
// console.log(genre);  //disco


// //#7  DONE.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// console.log(dojo);   //san jose
// learn();
// console.log(dojo);   //seattle
// console.log(dojo);   //burbank
// console.log(dojo);   //san jose

// //#8 DONE.
// console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// IF code runs as is, it will say:
// {name: Chicago, students: 65, hiring: true}
// dojo = "closed for now";
