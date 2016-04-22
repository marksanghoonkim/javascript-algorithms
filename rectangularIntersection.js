/*
Write a function to find the rectangular intersection of two given love rectangles.

var myRectangle = {
  // coordinates of bottom-left corner
  leftX: 1,
  bottomY: 5,

  // width and height
  width: 10,
  height: 4,
};
*/

function findRangeOverlap(point1, length1, point2, length2) {
  // find the highest start point and lowest end point.
  // the highest ("rightmost" or "upmost") start point is
  // the start point of the overlap.
  // the lowest end point is the end point of the overlap.
  var highestStartPoint = Math.max(point1, point2);
  var lowestEndPoint = Math.min(point1 + length1, point2 + length2);

  // return null overlap if there is no overlap
  if (highestStartPoint >= lowestEndPoint) {
    return {
      startPoint: null,
      overlapLength: null
    };
  }

  var overlapLength = lowestEndPoint - highestStartPoint;

  return {
    startPoint: highestStartPoint,
    overlapLength: overlapLength
  };
}

function findRectangularOverlap(rect1, rect2) {
  // get the x and y overlap points and lengths
  var xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
  var yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

  // return null rectangle if there is no overlap
  if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
    return {
      leftX: null,
      bottomY: null,
      width: null,
      height: null,
    };
  }

  return {
    leftX: xOverlap.startPoint,
    bottomY: yOverlap.startPoint,
    width: xOverlap.overlapLength,
    height: yOverlap.overlapLength,
  };
}

// test case
var a = {
  leftX: 1,
  bottomY: 1,
  width: 4,
  height: 5
}

var b = {
  leftX: 4,
  bottomY: 5,
  width: 2,
  height: 2
}  

console.log(findRectangularOverlap(a, b));
