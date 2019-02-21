//OPERATORS!
//do some operations on some values, get new values, brah

//Assignment operators 
var x = 5; // = stores value on right to variable on left

//Arithmetic operators
// + - * / %
1 + 1; //2  addition
4 * 2; //8  multiplication
5 - 3; // 2 subtraction
36 / 4; //9  division
7 % 3; //1 modulus (the remainder when dividing)

//Comparison operators - resolves values to true or false
//< less than, > greater than, == equals, != not equals, strickly equals===
10 > 5; // true
"5" === 5; //false
30 < 20; //false
[2] == [2]; //true
"five" != "jesse"; //true 
"3" === 3 //false, not strickly equal


//Unary operators (!, typeOf, -)
//works on operand
var y;
!(y == undefined); //false
typeof "jesse" //"string"
var x = -4; //negative

//Logical operators - get boolean values based on logic rules
//&& and, || or, ! not, operands can be boolean or truthy/falsey that resolve to boolean
true && true; //true
false || true; //true
!false //true

//Ternary operator (a ? b : c)
//kind like and if-else statement but instead of running blocks of code it resolves
//one value or another based the initial condition
// condition ? value if true : value if false;
x > y ? "okay" : "no way"; // if x is greater we get "okay", if not we get "no way"