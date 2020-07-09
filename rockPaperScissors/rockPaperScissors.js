/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (rounds) {
  // TODO: your solution here
  var sequenceResult = [];
  // calculate the maximum number of combinations we can have based on the input rounds.
  // factorial won't work because RPS can have repeat letter: like RRS.
  // total combination = rounds^rounds
  var totalCombination = Math.pow(rounds, rounds);
  // count for every letter is equal: totlaCombination/ 3

  var r = totalCombination / 3;
  var p = totalCombination / 3;
  var s = totalCombination / 3;
  // loop for number of input rounds
    // loop for
  // for (var i = 0; i <= r.length; i++)
  var count = 0;

  // concat letters onto R
  // use Math.min(r, p, s) to choose which one to concat everytime into string


};

