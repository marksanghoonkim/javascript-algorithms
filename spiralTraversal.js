/*
Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
and prints out every value found, but in a spiral from the upper left in to the center.
*/

function spiralTraversal(matrix) {
  var results = [];
  
  var copy = matrix.slice();

  // recursive fn that goes around the matrix once and pushes to results
  var goAround = function(input) {
    // if input is 1 row
    if (input.length === 1) {
      var topRow = input.splice(0,1);
      for (var i = 0; i < topRow[0].length; i++) {
        results.push(topRow[0][i]);
      }
      return;
    }
  
    // splice first row from input and push
    var topRow = input.splice(0,1);
    for (var i = 0; i < topRow[0].length; i++) {
      results.push(topRow[0][i]);
    }

    // splice right side top to bottom and push
    for (var i = 0; i < input.length; i++) {
      // splice last element in each row
      var numCols = input[i].length;
      var valueToPush = input[i].splice(numCols-1, 1);
      results.push(valueToPush[0]);
    }
    
    // splice bottom row from input and push
    var botRow = input.splice(input.length - 1, 1);
    for (var i = botRow[0].length - 1; i >= 0; i-- ) {
      results.push(botRow[0][i]);
    }
    
    // splice left side bottom to top and push
    for (var i = input.length - 1; i >= 0; i--) {
      // splice first element in each row
      var valueToPush = input[i].splice(0, 1);
      results.push(valueToPush[0]);
    }
  }

  while(copy.length > 0) {
    goAround(copy);
  }
  
  // check if any undefined values in results
  for (var i = 0; i < results.length; i++) {
    if (results[i] === undefined) {
      results.splice(i, 1);
      i--;
    }
  }

  return results;
}
