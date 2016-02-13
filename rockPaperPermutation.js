/*
Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.
*/

function rockPaperPermutation (roundCount) {
  var hands = ['r', 'p', 's'];

  var answer = [];
  var prevRound = ['r', 'p', 's'];
  var temp = [];

  if (roundCount === 1) {
    return hands;
  }
  var n = 0;

  while(n < roundCount-1) {
    // clear the answer
    answer.splice(0, answer.length);

    for (var i = 0; i < hands.length; i++) {
      for (var j = 0; j < prevRound.length; j++) {

        answer.push(hands[i] + prevRound[j]);
        // create a temp array
        temp.push(hands[i] + prevRound[j]);
      }
    }
    prevRound = temp.slice();
    temp.slice(0, temp.length);
    n++;
  }
  return answer;
}
