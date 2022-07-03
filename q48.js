// Difference between Async/Await and Generators usage to achieve the same functionality.

// Generator functions are run by their generator yield by yield which means one output at a time, whereas Async-await functions are executed sequentially one after another.
// Async/await provides a certain use case for Generators easier to execute.
// The output result of the Generator function is always value: X, done: Boolean, but the return value of the Async function is always an assurance or throws an error.

//Generator

function* makeRangeIterator(start = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}


//Async functions

async function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {myDisplayer(value);}
  );