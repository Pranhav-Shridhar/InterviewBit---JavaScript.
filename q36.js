// In JavaScript, how many different methods can you make an object?

// You can create an object in three different ways:

// Using object literal

// program to create JavaScript object using object literal
const person = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);

// By creating instance of Object directly

// program to create JavaScript object using instance of an object
const a = new Object ( { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
});

console.log(typeof a); // object

// accessing the object value
console.log(a.name);
console.log(a.hobbies[0]);
a.greet();
console.log(a.score.maths);


// By using constructor function

// program to create JavaScript object using instance of an object

function Person() {
    this.name = 'John',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello everyone.');
    },
    this.score = {
        maths: 90,
        science: 80
    }

}

const b = new Person();

console.log(typeof b); // object

// accessing the object value
console.log(b.name);
console.log(b.hobbies[0]);
b.greet();
console.log(b.score.maths);







