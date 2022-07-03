// What is the difference between exec () and test () methods in javascript?

// test () and exec () are RegExp expression methods used in javascript. 
// We'll use exec () to search a string for a specific pattern, and if it finds it, it'll return the pattern directly; else, it'll return an 'empty' result.
// We will use a test () to find a string for a specific pattern. It will return the Boolean value 'true' on finding the given text otherwise, it will return 'false'.


let text = "The best things in life are free";
let result = /y/.exec(text);
document.getElementById("demo").innerHTML = result;

let a = "The best things in life are free";
let b = /y/.test(text);
document.getElementById("demo").innerHTML = b;