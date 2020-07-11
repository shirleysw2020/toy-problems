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

var rockPaperScissors = function (rounds = 3) { // set 3 as default
  if(rounds === 0) {return [];}
  var options = ['R', 'P', 'S'];
  var result = [];

  var findAllCombinations = function(combination) {
    // base case:
    if (combination.length === rounds) {
      result.push(combination);
      return; // return to for loop
    }
    // recursion case:
    for (var i = 0; i < options.length; i++) {
      // add the current option of options array to the combination string
      var currentCombination = combination + options[i]
      // call helper function with the updated combination string
      findAllCombinations(currentCombination);
    }
  }
  findAllCombinations('');
  return result;
};