var shuffleDeck = function(deck) {

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var shuffledDeck = [];

  while (deck.length) {
    var random = getRandomInt(0, deck.length);
    var randomCard = deck.splice(random, 1)[0];
    shuffledDeck.push(randomCard);
  }

  return shuffledDeck;
}