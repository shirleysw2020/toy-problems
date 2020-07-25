/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  /* (0,1         1,2
      0,2         1,3
      0,3         1,4
      0,4)        1,5
  */
  var res = [''];
  var i = 0
  var y = i + 1;
  // var incrementation = 1;
    while (i < str.length) {
      for (var y = i + 1;  y <= str.length; y++) {
        res.push(str.slice(i, y))
      }
      i++;
    }
  return res;
};


console.log(powerSet('jump'));