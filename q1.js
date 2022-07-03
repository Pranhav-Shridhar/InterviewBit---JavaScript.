// What are the different data types present in javascript?

//Primitive data types
typeof "John Doe" // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof 234567890123456789012345678901234567890n // Returns bigint
typeof undefined // Returns "undefined"
typeof null // Returns "object" (kind of a bug in JavaScript)
typeof Symbol('symbol') // Returns Symbol

//Non-primitive data types

// Collection of data in key-value pairs

var obj1 = {
    x:  43,
    y:  "Hello world!",
    z: function(){
       return this.x;
    }
 }
       
 // Collection of data as an ordered list
      
 var array1 = [5, "Hello", true, 4.1]; 