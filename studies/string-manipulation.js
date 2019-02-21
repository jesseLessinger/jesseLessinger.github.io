// Here's some way to manipulate strings

//With operators
// + concats strings
"hello" + " universe"; //"hello universe"

//we can access individual characters of a string like a 0-indexed array

let someString = "Jesse"
someString[0]; //J


//With string methods
let str = "Hello Universe!\n";
let lowStr = str.toLowerCase(); // "hello universe\n" assigned to lowStr
let strTwo = str.concat("this is Earth speaking"); //strTwo is "Hello Universe\nthis is Earth speaking"
//splits and array based what is split is passed, and puts it into and array
let arr = str.split(" ") // ["Hello", "Universe"]
//technically for array but returns a string with elements joined around a given string
arr.join("-") // "Hello-Universe"

//grab a substring, first arguement is the index to start, second is the length of the substring
// you want
strTwo.substr(0,5) // "Hello"
