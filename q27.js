// What is the use of a constructor function in javascript?

// Constructor functions are used to create objects in javascript.



function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  
  var person1 = new Person("Vivek", 76, "male");
  console.log(person1);
  
  var person2 = new Person("Courtney", 34, "female");
  console.log(person2);