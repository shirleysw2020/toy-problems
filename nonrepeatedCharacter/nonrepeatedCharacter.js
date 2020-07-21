/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  // have an object to keep track of each character and the num of times they appeared
  // seach for the key that has only one occurence as its key value and return that key

  const storage = {};

  for (var i = 0; i < string.length; i++) {
    storage[string[i]] = (storage[string[i]] + 1) || 1;
  }

  for (var key in storage) {
    if (storage[key] === 1) {
      return key;
    }
  }
};

console.log(firstNonRepeatedCharacter('ABA')); // => 'B'
console.log(firstNonRepeatedCharacter('AACBDB')); // => 'C'