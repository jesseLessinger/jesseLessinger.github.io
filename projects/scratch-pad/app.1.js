#!/usr/bin/env node

'use strict';

function toDashCase(string) {
  
  return string.split(" ").join("-").toLowerCase();
  
  
}

function fun(str) {
  
  return toDashCase(str) + "everybody?".toUpperCase();
}

console.log(fun("hello world what's up"));
//toDashCase("Hello World");