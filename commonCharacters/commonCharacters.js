/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var strObj1 = {}, strObj2 = {}, resStr = '';
  // loop through first string and put all characters in strObj1
  for (var c of string1) {
    strObj1[c] = (strObj1[c] + 1) || 1;
  }

  for (var c of string2) {
    strObj2[c] = (strObj2[c] + 1) || 1;
  }
  // loop over strObj1, check if same key exist in strObj2
  for (var char in strObj1) {
    if (strObj1[char] === strObj2[char]) {
      // add character to result str
      resStr += char;
    }
  }
  return resStr;
};

