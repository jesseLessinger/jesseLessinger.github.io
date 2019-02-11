//OPERATORS!
//do some operations on some values, get new values, brah

//Assignment operators 
var x = 5; // = stores value on right to variable on left

//Arithmetic operators
// + - * / %
4 * 2; //8 woo hoo

//Comparison operators - resolves values to true or false
//< less than, > greater than, == equals, != not equals, strickly ===
10 > 5; // true
"5" === 5; //false

//Unary operators (!, typeOf, -)
//works on operand
var y;
!(y == undefined); //false

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