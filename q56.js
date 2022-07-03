// Guess the outputs of the following code:

// Code 1

  let hero = {
    powerLevel: 99,
    getPower(){
      return this.powerLevel;
    }
  }
  
  let getPower = hero.getPower;
  
  let hero2 = {powerLevel:42};
  console.log(getPower());
  console.log(getPower.apply(hero2));
  


  // Code 2
  
  const a = function(){
    console.log(this);
  
    const b = {
      func1: function(){
        console.log(this);
      }  
    }
  
    const c = {
      func2: ()=>{
        console.log(this);
      }
    }
  
    b.func1();
    c.func2();
  }
  
  a();
  


  // Code 3
  
  const b = {
    name:"Vivek",
    f: function(){
      var self = this;
      console.log(this.name);
      (function(){
        console.log(this.name);
        console.log(self.name);
      })();
    }
  }
  b.f();

// Answers:

// Code 1 - Output in the following order:

undefined
42
// Reason - The first output is undefined since when the function is invoked, it is invoked referencing the global object:

// window.getPower() = getPower();

// Code 2 - Outputs in the following order:

// global/window object
// object "b"
// global/window object

// Since we are using the arrow function inside func2, this keyword refers to the global object.

// Code 3 - Outputs in the following order:

// "Vivek"
// undefined
// "Vivek" 
// Only in the IIFE inside the function f, this keyword refers to the global/window object.
 

