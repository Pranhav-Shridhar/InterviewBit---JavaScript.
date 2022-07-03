// Explain call(), apply() and, bind() methods.

// 1. call():

// It’s a predefined method in javascript.
// This method invokes a method (function) by specifying the owner object.

// Example 1:

function sayHello(){
  return "Hello " + this.name;
}
        
var obj = {name: "Sandy"};
        
sayHello.call(obj);
        
// Returns "Hello Sandy"

// apply()

// The apply method is similar to the call() method. The only difference is that,

// call() method takes arguments separately whereas, apply() method takes arguments as an array.

function saySomething(message){
  return this.name + " is " + message;
}        
var person4 = {name:  "John"};
saySomething.apply(person4, ["awesome"]);

bind():

// This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.
// Example with arguments:

var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
   
var person1 = {name:  "Vivek"};
     
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
      
// Binds the displayDetails function to the person1 object
        
      
detailsOfPerson1();
// Returns Vivek, bike details: TS0452, Thunderbird
