/*
Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

If the first element is greater than the second element, it swaps the two.
It then compares the second to the third, and the third to the fourth, and so on.
In this way, the largest values ‘bubble’ to the end of the array.
Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
Implement a function that takes an array and sorts it using this technique.

NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

Example:
Input:
[ 20, -10, -10, 2, 4, 299 ]
Output:
[ -10, -10, 2, 4, 20, 299 ]
*/

function bubbleSort (input) {
  var temp = 0;
  // make copy of input array
  var results = input.slice();
  var prevResults = [];
  var isSorted = false;

  while (!isSorted) {
    // save previous iteration's results
    prevResults = results.slice();

    // iterate through the array
    for (var i = 1; i < results.length; i++) {
      // if array[i-1] is greater than array[i], switch the two
      if (results[i-1] > results[i]) {
        temp = results[i];
        results[i] = results[i-1];
        results[i-1] = temp;
      }
    }

    // if most recent iteration of bubbleSort equals prevResults, then input is sorted
    if (results.join(',') === prevResults.join(',')) {
      isSorted = true;
    }
  }
  return results;
}
