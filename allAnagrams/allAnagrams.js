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
  var result = [string];
  // push initial/input string into result
  // alternate characters (string.length - 1 times) --> meaning: keep pushing 1st char to last char)
      // push new string into result
  // at the end of the last alternation (we reached string - 1 times)
    // swap first two characters
    // repeat line 17/18
  var times = 0;
  while (times < string.length - 1) {
    for (var i = 0; i < string.length - 1; i++) {
      var restOfStr = string.slice(1);
      // slice out first char
      var first = string.slice(0,1);
      // append it to the end of string
      var alterStr = restOfStr.concat(first);
      string = alterStr
      result.push(alterStr);
      // save first and second chat for swapping
      var oldFirst = string[0];
      var oldSecond = string[1]
      var keepRest = string.slice(2);
    }
    // swap first and second characters
    string = oldSecond.concat(oldFirst).concat(keepRest);
    result.push(string);
    times++;
  }
  return result;

};

console.log(allAnagrams('abc'))