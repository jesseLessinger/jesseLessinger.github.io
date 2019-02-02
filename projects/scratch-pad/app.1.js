#!/usr/bin/env node

'use strict';


function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    
    let rev = "";
    for (let i = input.length-1; i > -1; i--) {
      rev += input[i];
    }
    return rev;
    
    // YOUR CODE GOES ABOVE HERE //
}


console.log(reverseString("hello"));
