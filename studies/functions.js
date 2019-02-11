/*
The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by?
first define, next we run, or call the function
*/
//declaration:
function myFunc(myParam) {
    //do some stuff
}
//call
myFunc(5);


//What’s the difference between a function’s parameters and arguments PASSED to a function?
//parameters is how input is gathered for a function and used inside the function 
//arguments are the specific data passed to a function when it's called
function myFunc(myParam) {
    console.log(myParam) //myParam is the parameter
}
//call
myFunc(5); //5 is the argument

//What’s the syntax for a NAMED function?
function functionName(parameters) {
    //function body
}

//How do we assign a function to a variable?
const doSomething = function() {};

//Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. 
//How do we specify inputs, and how do we specify outputs?
//inputs are specified with parameters, outputs with return statements
const add = (x, y) => {return x + y};
console.log(add(2,3)); //5!

//Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
const parentVar = 10;
function scope() {
    var childVar = 5;
    return parentVar + childVar;
}
// console.log(childVar); reference error! childVar is locally scoped to scope() function, not available here


//Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room app for an example!) (ALSO, see: Understanding JavaScript Closures with Ease)
function closureTest() {
    const myArray = [1, 2, 3, 4];
    
    return {
        arr: myArray,
        add: (elem) => { myArray.push(elem); }
    };
}

const myObj = closureTest();
myObj.add("hello!");
console.log(myObj.arr); //[1,2,3,4, "hello"]