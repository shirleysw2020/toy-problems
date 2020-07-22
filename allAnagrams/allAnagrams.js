/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.

  if(string === 0) {return [];}
  if (string.length === 1) {return [string]; }
  var result = [];
  // push initial/input string into result
  // alternate characters (string.length - 1 times)...meaning: keep pushing 1st char as last char)
      // push new string into result
  // at the end of the last alternation (we reached string - 1 times)
    // swap first two characters
    // repeat line 17/18



};

console.log(allAnagrams('abc'))