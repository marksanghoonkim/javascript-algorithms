// Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

function largestProductOfThree (array) {
  // first sort array using bubble sort
  var temp = 0;
  // make copy of input array
  var sortedArray = array.slice();
  var prevResults = [];
  var isSorted = false;
  var counter = sortedArray.length;

  while (!isSorted) {
    // save previous iteration's results
    prevResults = sortedArray.slice();
    isSorted = true;

    // iterate through the array
    for (var i = 1; i < counter; i++) {
      // if array[i-1] is greater than array[i], switch the two
      if (sortedArray[i-1] > sortedArray[i]) {
        temp = sortedArray[i];
        sortedArray[i] = sortedArray[i-1];
        sortedArray[i-1] = temp;
        isSorted = false;
      }
    }
  }

  if (sortedArray[0] * sortedArray[1] > sortedArray[sortedArray.length-2] * sortedArray[sortedArray.length-3] && sortedArray[sortedArray.length-1] > 0) {
    return sortedArray[0] * sortedArray[1] * sortedArray[sortedArray.length-1];
  }

  // use largest three integers to provide answer
  return sortedArray[sortedArray.length-1] * sortedArray[sortedArray.length-2] * sortedArray[sortedArray.length-3];

}
