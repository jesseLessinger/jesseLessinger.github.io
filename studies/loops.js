
//Explain while, for, and for-in loops
// while (some condition is true) { do stuff }
let x = 5
while (x < 10) {
    console.log(x)
    x++;
}

//for (starting state; stop condition; incrementor) { do some stuff}
for (let i = 0; i < 20; i++) {
    console.log(i);
}

//for-in for looping over objects 
//for (key variable in object)
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


//Loop over an Object - see above
