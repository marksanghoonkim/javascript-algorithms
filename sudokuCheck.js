function sudokuCheck(boardStr) {
  /*
  Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.
  */

  // check all rows that they are a valid nine
  var rows = boardStr.split('\n');

  for (var i = 0; i < rows.length; i++) {
    if (!isValidNine(rows[i])) {
      return 'invalid';
    }
  }

  // check all cols that they are a valid nine

  // create rows array
  var cols = ['', '', '', '', '', '', '', '', ''];
  var colNum = 0;
  while (colNum !== 9) {
    for (var i = 0; i < rows.length; i++) {
      cols[colNum] += rows[i][colNum];
    }
    colNum++;
  }

  for (var i = 0; i < cols.length; i++) {
    if (!isValidNine(cols[i])) {
      return 'invalid';
    }
  }

  // create 3x3's
  var threeByThrees = [];
  threeByThrees.push(create3x3Strings(rows.slice(0,3)));
  threeByThrees.push(create3x3Strings(rows.slice(3,6)));
  threeByThrees.push(create3x3Strings(rows.slice(6,9)));

  // check all 3x3's that they are a valid nine
  for (var i = 0; i < threeByThrees.length; i++) {
    for (var j = 0; j < threeByThrees[i].length; j++) {
      if (!isValidNine(threeByThrees[i][j])) {
        return 'invalid';
      }
    }
  }

  return 'solved';
}

function isValidNine(inputStr) {
  var testAgainst = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false
  }

  // iterate through inputStr and record which number exists
  for (var i = 0; i < inputStr.length; i++) {
    testAgainst[inputStr[i]] = true;
  }

  // check that every key was set to true
  for (var key in testAgainst) {
    if (testAgainst[key] === false) {
      return false;
    }
  }

  return true;
}

function create3x3Strings(threeRowArray) {
  var threeByThrees = ['', '', ''];
  var start = 0;
  for (var i = 0; i < threeRowArray.length; i++) {
    threeByThrees[start/3] += (threeRowArray[i].slice(start, start + 3));
    if (i == 2 && start !== 6) {
      start += 3;
      i = -1;
    }
  }
  return threeByThrees;
}
