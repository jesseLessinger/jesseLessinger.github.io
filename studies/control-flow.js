//maybe you wanna do different stuff based on different conditions, ya know?

//If - if (some condition) {do some stuff}
let x = 5;
let y = 4;

if (x > y) { 
    console.log("x bigger den y");
}

//Else-if - add more conditions, order matters
if (x === 10) { 
    //do some stuff
} else if (y === 4) {
    //do some other stuff
} else {
    //do my default stuff
}

//Switch - kinda like a special if-else-if-else statement checking
//one value and doing different things in different cases.

switch (x) {
    case 1: console.log("x is 1"); break;
    case 2: console.log("x is 2"); break;
    case 3: console.log("x is 3"); break;
    case 4: console.log("x is 1"); break;
    case 5: console.log("x is 1"); break;
    default: console.log("x is 1"); break;
}