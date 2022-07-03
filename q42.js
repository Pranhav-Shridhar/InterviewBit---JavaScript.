// Explain WeakMap in javascript.

// In javascript, Map is used to store key-value pairs. The key-value pairs can be of both primitive and non-primitive types. WeakMap is similar to Map with key differences:

// The keys and values in weakmap should always be an object.
// If there are no references to the object, the object will be garbage collected.

const map1 = new Map();

map1.set('Value', 1);

const map2 = new WeakMap();
map2.set('Value', 2.3); // Throws an error

let obj = {name:"Vivek"};
const map3 = new WeakMap();
map3.set(obj, {age:23});