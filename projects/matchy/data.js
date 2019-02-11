/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "doggy";
animal['name'] = "Fred";
animal.noises = [];

//console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "arf";
noises.push("woof");
noises.unshift("grrrr");
noises[noises.length] = "meow";

//console.log(noises.length);
//console.log(noises[noises.length-1]);
//console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal.noises = noises;

animal.noises.push("blub");

//console.log(animal.noises)

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * bracket or dot notation.  bracket is dyanmic, not is coerced to a string
 
 * 2. What are the different ways of accessing elements on arrays?
 * bracket notation with an index
 * *******************************************************************
 */



/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
//console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);

var dino = { species: 'dinosaur', name: 'Amie', noises: ['ROOOAR', 'squueek!', 'flub'] };
animals.push(dino);

var bug = { species: 'bug', name: 'Liz', noises: ['sft-sft', 'whoo whoo', 'heeeeeeyyy'] };
animals.push(bug);

//console.log(animals);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//an array is good for list
var friends = [];

friends.push(animals[getRandom(animals)].name);

dino.friends = friends;

function getRandom(animals) {
    return Math.floor(Math.random()*animals.length);
}
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
