// What are object prototypes?

// All javascript objects inherit properties from a prototype. For example,

// Date objects inherit properties from the Date prototype
// Math objects inherit properties from the Math prototype
// Array objects inherit properties from the Array prototype.
// On top of the chain is Object.prototype. Every prototype inherits properties and methods from the Object.prototype.
// A prototype is a blueprint of an object. The prototype allows us to use properties and methods on an object even if the properties and methods do not exist on the current object.

function Student() {
    this.name = 'John';
    this.gender = 'M';
}

Student.prototype.age = 15;

var studObj1 = new Student();
alert(studObj1.age); // 15

var studObj2 = new Student();
alert(studObj2.age); // 15