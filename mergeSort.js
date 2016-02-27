/*
Implement a function that sorts an array of numbers using the “mergesort” algorithm.
*/

function mergeSort(arr){
  // base case
  if (arr.length === 1) {
    return arr;
  }

  var mid = Math.floor(arr.length/2);
  var firstHalf = arr.slice(0, mid);
  var secondHalf = arr.slice(mid, arr.length);

  return sortedMerge(mergeSort(firstHalf), mergeSort(secondHalf));
}

var sortedMerge = function(a, b) {
  var i = 0;
  var j = 0;
  var merged = [];

  while (i !== a.length || j !== b.length) {
    if (a[i] === undefined) {
      merged.push(b[j]);
      j++;
      continue;
    }
    if (b[j] === undefined) {
      merged.push(a[i]);
      i++;
      continue;
    }
    if (a[i] < b[j]) {
      merged.push(a[i]);
      i++;
    } else if (a[i] >= b[j]) {
      merged.push(b[j]);
      j++;
    }
  }
  return merged;
};