// What are generator functions?
// Introduced in the ES6 version, generator functions are a special class of functions.

// They can be stopped midway and then continue from where they had stopped.

// Generator functions are declared with the function* keyword instead of the normal function keyword:

function* genFunc(){
    yield 3;
    yield 4;
  }
  genFunc(); // Returns Object [Generator] {}


  genFunc().next(); // Returns {value: 3, done:false}

//   Generator functions are used to return iterators. Let’s see an example where an iterator is returned:

function* iteratorFunc() {
  let count = 0;
  for (let i = 0; i < 2; i++) {
      count++;
      yield i;
  }
  return count;
}

let iterator = iteratorFunc();
console.log(iterator.next()); // {value:0,done:false}
console.log(iterator.next()); // {value:1,done:false}
console.log(iterator.next()); // {value:2,done:true}