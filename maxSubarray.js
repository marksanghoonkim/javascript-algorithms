function maxSubarray(array) {
  var maxSoFar = array[0];
  var maxEndingHere = array[0];
  
  for (var i = 1; i < array.length; i++) {
    maxEndingHere = Math.max(array[i], array[i] + maxEndingHere);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}