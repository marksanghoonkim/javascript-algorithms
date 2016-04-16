function highestProduct(inputArray) {
  
  // O(nlogn) solution
  // var sorted = inputArray.sort(function(a, b) {
  //   return b - a;
  // });

  // var highestProductPositive = sorted[0] * sorted[1] * sorted[2];
  // var highestProductNegatives = sorted[0] * sorted[sorted.length - 2] * sorted[sorted.length - 1];

  // return (highestProductPositive > highestProductNegatives) ? highestProductPositive : highestProductNegatives;


  // O(n) solution
  var highestProductOfThree = inputArray[0] * inputArray[1] * inputArray[2];
  var highest = Math.max(inputArray[0], inputArray[1]);
  var lowest  = Math.min(inputArray[0], inputArray[1]);

  var highestProductOf2 = inputArray[0] * inputArray[1];
  var lowestProductOf2  = inputArray[0] * inputArray[1];

  for (var i = 2; i < inputArray.length; i++) {
    var current = inputArray[i];

    highestProductOfThree = Math.max(
      highestProductOf2 * current,
      lowestProductOf2 * current,
      highestProductOfThree
    );

    highestProductOf2 = Math.max(
      highest * current,
      lowest * current,
      highestProductOf2
    );

    lowestProductOf2 = Math.min(
      lowest * current,
      highest * current,
      lowestProductOf2
    );

    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  }

  return highestProductOfThree;
}