// Explain Implicit Type Coercion in javascript.
// Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.

// String coercion
// String coercion takes place while using the ‘ + ‘ operator. When a number is added to a string, the number type is always converted to the string type.

// Example 1:

var x = 3;
var y = "3";
console.log(x + y) // Returns "33" 

//Example 2:

var x = 24;
var y = "Hello";
x + y   // Returns "24Hello"; 

// Note - ‘ + ‘ operator when used to add two numbers, outputs a number. The same ‘ + ‘ operator when used to add two strings, outputs the concatenated string:

var name = "Vivek";
var surname = " Bisht";
name + surname     // Returns "Vivek Bisht" 

var x = 3;
Var y = "3";
x - y    //Returns 0 since the variable y (string type) is converted to a number type