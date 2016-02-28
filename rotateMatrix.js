function rotateMatrix (matrix) {
  /*
  Write a function that rotates a NxN matrix 90 degrees clockwise. 
  A matrix, also called a 2-D array, is simply an array of arrays of values.
  */

  var dim = matrix.length;
  var newMatrix = [];
  
  // initialize new Matrix
  for (i = 0; i < dim; i++) {
    newMatrix.push([]);
  }

  // going to take each nth row, and turn them into the n minus row column
  // ie. in at 4x4, row 1 -> col 4, row 2 -> col 3

  var rotate90CL = function (point) {
    // point is an array with point[0] = m, point[1] = n
    var newPoint = [];
    // newPoint's row (m) is found from point's column (n)
    newPoint[0] = point[1];
    // newPoint's col (n) is found from absolute value of (dim - point's row(m))
    newPoint[1] = dim - point[0] - 1;

    return newPoint;
  }

  var pushIntoMatrix = function (matrix, point, value) {
    // matrix is an empty array
    // point is a point to be pushed in
    matrix[point[0]][point[1]] = value;
  }

  // iterate through each row
  for (var i = 0; i < dim; i++) {
    // iterate through the column
    for (var j = 0; j < dim; j++) {
      var value = matrix[i][j];
      var oldSpot = [i, j];
      var newSpot = rotate90CL(oldSpot);
      pushIntoMatrix(newMatrix, newSpot, value);
    }
  }

  return newMatrix;
}
