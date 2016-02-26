/*
Given a sorted array of integers, find the index of a target value using a binary search algorithm.
*/

function binarySearch (array, target) {
  
  var recurse = function(inputArray, target, start, end) {
    
    if (start > end) {
      return -1;
    }

    // get the middle index of the array, round if necessary
    var middleIndex = Math.floor((start + end)/2);
    var middleValue = inputArray[middleIndex];
    
    // if the target is lower, recurse on the lower half
    if (middleValue > target) {
      return recurse(inputArray, target, start, middleIndex-1);
    }
    // if the target is higher, recurse on the upper half
    if (middleValue < target) {
      return recurse(inputArray, target, middleIndex + 1, end);
    }
    // else found
    return middleIndex;
  }
  
  return recurse(array, target, 0, array.length-1);
}
