/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


/*      var, let, const

* SCOPE
* var has function scoping while let and const are scoped to any code block its declared inside of
*/
function rando() {
    var myVar = "hello";
    if (myVar === "hello"){
        var newVar = 5;
        let boolVar = true;
    }
    
    // console.log(boolVar); this wouldn't work here cuz boolVar not defined 
    console.log(newVar); //should print 5 since var isn't scope to an if block.
    
}

//console.log(myVar); oh no, reference erorr, myVar is not defined cuz var is scoped to functions! 

/* 
*/
// CONST can't be reassinged
const meNoChange = "hello";
//meNoChange = 5; error! can't re-assigm no constant brah.

let iChange = "yo";
var iChangeToo = "yo yo";

iChange = "i'm different!";
iChangeToo = "change is good";

/* HOISTING 
*
* var (and functions) are "hoisted" to the top of their scope meaning the declaration
* is brought to the top of the scope it's declared in, but the initialization is not 

*/
console.log(hoisted); //undefined, not 5 or 10

hoisted = 5;

console.log(hoisted); //5

var hoisted = 10;

console.log(hoisted); //10 



