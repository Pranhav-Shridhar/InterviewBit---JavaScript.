// What is recursion in a programming language?

// Recursion is a technique to iterate over an operation by having a function call itself repeatedly until it arrives at a result.

function computeSum(arr){
    if(arr.length === 1){
      return arr[0];
    }
    else{
      return arr.pop() + computeSum(arr);
    }
  }
  computeSum([7, 8, 9, 99]); // Returns 123
  