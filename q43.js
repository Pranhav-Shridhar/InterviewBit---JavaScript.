// What is Object Destructuring?
// Object destructuring is a new way to extract elements from an object or an array.

// object destructuring

const classDetails = {
    strength: 78,
    benches: 39,
    blackBoard:1
  }
  
  const {strength:classStrength, benches:classBenches,blackBoard:classBlackBoard} = classDetails;
  
  console.log(classStrength); // Outputs 78
  console.log(classBenches); // Outputs 39
  console.log(classBlackBoard); // Outputs 1

//   array destructuring

const arr = [1, 2, 3, 4];
const [first,second,third,fourth] = arr;
console.log(first); // Outputs 1
console.log(second); // Outputs 2
console.log(third); // Outputs 3
console.log(fourth); // Outputs 4

