/* 
* PRIMITIVE DATATYPES
* these are basic immutable datatypes a number, string,  

Number 64 bits */
var myNum = 24;


//String like an array of char 
let myStr = "I\"m a string dood";
myStr[0]; //I
myStr.length // 17

//Boolean true or false, 1 bit
var myBool = true;
var newBool = 5 > 6 // expression that resolves to false

/*
* COMPLEX DATATYPES
* we're talking collections of data, and functions
*/

//Array - zero-indexing collection of data, data can be anything including other collections.
var myArr =  [1,2,3,4,5,"string", true, {}];
myArr[3]; //4 bracket notation access

//Object collection of data organzied a key-value pairs
var myObj = {
    name: "Jesse",
    age: 35,
};

myObj.name //"Jesse" dot notation access
myObj['age'] //bracket notation, any expression that resolves to string




//Function - a resuable block of code, can be called passing it data and return a value.

function booBoo (thingThing) {
    console.log("hello " + thingThing);
    return thingThing + " you did it."
}

var str = booBoo("Ralph"); //logs "hello Ralph", str = "Ralph you did it"


//undefined - a primitive value that means something has not been given a value
var yoyo;
console.log(yoyo) //undefined

//null - primative value that means the value of something has been intentionally nullified
var g = 5;
if (true) {
    g = null;
}

//NaN - is value that means it's Not a Number, usually a math operations that doesn't work
var b = Math.sqrt(-1); //can't divide by 0, not a number or NaN

//Infinity and -Infinity are values that represent infinity and negative infinity
//like if you divide a number by 0
var infin = 5 / 0; //Infinity 


/*What is the difference between primitive/simple and complex data types?
Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. 
What does that mean, and how are they different?
*/ 

//simple data types are just one value, complex are collections of values or in the case 

// Copy by value - for simple datatypes copies value in a new one */
var a = 2;
var b = a;
a = 20;
console.log(b) //2 still equals 2

//Copy bt reference - for complex datatype is copies the refence pointing to the same value
var x = {name: "Jesse"}
var y = x;
x.name = "new name";
console.log(y.name) //new name cuz y and z point to the same obj.



