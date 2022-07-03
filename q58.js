// Write a function that performs binary search on a sorted array.

function binarySearch(arr,value,startPos,endPos){
  if(startPos > endPos) return -1;

  let middleIndex = Math.floor(startPos+endPos)/2;

  if(arr[middleIndex] === value) return middleIndex;

  else if(arr[middleIndex] > value){
    return binarySearch(arr,value,startPos,middleIndex-1);
  }
  else{
    return binarySearch(arr,value,middleIndex+1,endPos);
  }
} 

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 5, 0,8));