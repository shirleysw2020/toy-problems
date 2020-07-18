/**
 * Given an array containing a deck of cards, implement a function that shuffles
 * the deck.
 *
 * Example:
 *  var deck = orderedDeck();
 *  // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
 *  shuffleDeck(deck);
 *  // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]
 *
 * Note:
 *   A shuffled deck should be completely random. That means that a given card should
 *   be as likely as any other to appear in a given deck index, completely independent
 *   of the order of the input deck. Think carefully about how to be sure your algorithm
 *   generates a properly shuffled deck-- it is easy to accidentally create a biased algorithm.
 *
 * Extra credit:
 *   - Even a naive algorithm can easily run in linear time. However, does your
 *     algorithm remain unbiased as N (the deck size) increases? How do you know?
 *   - Once you have created a properly random, linear algorithm, what is its space complexity?
 *     There is an algorithm that uses O(N) time and O(1) space (i.e., an in-place shuffle).
 *
 * A further note on randomness:
 *   Technically, a computer-shuffled deck will usually be "pseudorandom",
 *   not "truly" random. However, the difference between the two is too small to
 *   be detectable by any known test.
 *   See http://en.wikipedia.org/wiki/Pseudorandom_number_generator .
 *
 *   A human shuffler is much more biased; it takes around seven normal "riffle"
 *   shuffles before a real deck is actually randomized.
 *   See https://www.dartmouth.edu/~chance/teaching_aids/books_articles/Mann.pdf .
 */

var shuffleDeck = function(deck) {
  // thoughts:
  // math.random to randomize(O(1)? takes a random suit and a random value add them together.
  // ? but how to make sure you get to all the values with no repeat?
  // need to grab suits and values
  //
  // save deck of ordered deck
  var orderedDeck = orderedDeck();
  // sort (O(n2) or O(n log n)) the cards both ascending and descending randomly
  var shuffledDeck = orderedDeck.sort((a,b) => 0.5 - Math.random());
  return shuffledDeck;

  // method2: attempting O(n):________________________________________
  // use math.random * 10 to get a whole number, this is like a order "weight" for my current card.
  var shuffledRes = [];
  var orderedDeck = orderedDeck();
  // while deck of cards (array) still has card
  for (var i = 0; i < orderedDeck.length; i++) {
    // assign one card its order "weight", if i + 1 (next card) has greater math.random num
    var current = orderedDeck[i];
    var currentOrderWeight = Math.random() * 10;
    shuffledRes.push(orderedDeck[i])
      if (Math.random() * 10 >= currentOrderWeight) {
        // put it after first card
        shuffledRes.push(orderedDeck[i + 1]);
      } else {
        // put it before first card
        shuffledRes.unshift(orderedDeck[i + 1]);
      }
};

// Ordered deck generator provided for your testing convenience
// (You may alter this function, but an unaltered copy will be used for tests.)
var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

console.log(shuffleDeck(orderedDeck()));