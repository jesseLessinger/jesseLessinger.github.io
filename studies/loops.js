/* LOOOOOOOPS
* we use loops to repeat execution on a block of code
* before looping we need to make sure the conditions are right
* then we need to some end condition to avoid and infite loop

* WHILE 
* syntax: while (some condition is true) { loop body }
*/

let x = 5   // this a starting condition
while (x < 10) { //this end condition, repeat until false
    console.log(x)
    x++; //this in an incrementor, without which we'd have an infitite loop
}

/*FOR 
* similar to a while loop but lets us define a start condition, a stop condition
* and an incrementor all in one convenient line
* syntax: for (start state; stop condition; incrementor) { loop body }
*/ 

for (let i = 0; i < 20; i++) {
    console.log(i);
}

/*FOR IN 
* a for loop for objects 
* syntax: for (myVar in object) { loop body}
* myVar will be the key in each iteration the loop
*/

const obj = {x:1, y:2, z:3};
for (let key in obj) {
    console.log(obj[key]);
}

//Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
//Loop over an Array, forwards and backwards
const arr = [1,2,3,4,5];
for (let i = 0; i < arr.length-1; i++) {
    console.log(arr[i]);
} //forward
for (let i = arr.length-1; i > -1; i--) {
    console.log(arr[i]);
}


