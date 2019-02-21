/* CONTROL FLOW
* (maybe you wanna do different stuff cuz it depends, ya know?)
* This is all about controlling what code is executed based on different conditions.
* 
*
*
* If statement - a very common control flow statement that tests for a condition and
* if excutes a block of code if the condition was true:
* syntax: if (some condition) {do some stuff}
*/

let x = 5;
let y = 4;

if (x > y) { 
    console.log("x bigger den y");
}

/* else and else-if 
* else is used to execute a default block of code when 
* you if condition is false
* else if, are used when you want to test more than one condition, 
* else always comes at the end. 
* a chain of if, else-if(s) and, else statement are checked in order,
* if one condition is true the code block is executed all subsequent
* else if(s) and else will be ignored
*/ 

if (x === 10) { 
    //do some stuff
} else if (y === 4) {
    //do some other stuff
} else {
    //do my default stuff
}

//Switch - kinda like a special if-else-if-else statement checking
//one value and doing different things in different cases.
//the break keyword is used to stop code execution once a match is found
//even though switch is like an if-else-if-else statement it is sometimes
//an easier statement to write than a long chain of if else.

switch (x) {
    case 1: console.log("x is 1"); break;
    case 2: console.log("x is 2"); break;
    case 3: console.log("x is 3"); break;
    case 4: console.log("x is 1"); break;
    case 5: console.log("x is 1"); break;
    default: console.log("x is 1"); break;
}