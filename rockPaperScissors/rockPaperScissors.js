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


  // var choices = ['rock', 'paper', 'scissors'];
  // var reuslt = [];
  // //process current element

  // // iterate over choices
  // result.push(choice)
  //   // recurse (do i need to save this?)
  //   rockPaperScissors(rounds);
  //   // undo the last thing you did to make this work
  //   result.pop();
  // // return results
};


var arrangingCoins = function(totalCoins) {
  var currentCount = 0;
  if (count === totalCoins) {
    return
  }

  arrangingCoins(count + 1);
}

var arrangingCoins = function(totalCoins) {
  var numRows = 0;
  while (totalCoins > 1) {
    totalCoins -= numRows;
    numRows++;
  }

  return totalCoins < 0 ? numRows - 2 : numRows - 1;
}

var rockPaperScissors = function (rounds = 3) { // set 3 as default
  if(rounds === 0) {return [];}

  var options = ['R', 'P', 'S'];
  var result = [];
  // declare a helper function
  var findAllCombinations = function(combination) {
    // base case:
    // if the length of combination is equal to the input rounds
    if(combination.length === rounds) {
      // push the combination to the result array
      result.push(combination);
      // return to for loop
      return;
    }
    // recursion case:
    // iterate the options array
    for (var i = 0; i < options.length; i++) {
      // add the current option of options array to the combination string
      var currentCombination = combination + options[i]
      // call helper function with the updated combination string
      findAllCombinations(currentCombination);
    }
  }
  // call helper function
  findAllCombinations('');
  return result;
};