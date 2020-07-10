/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  let occurances = {};
  arr.map((num, index) => {
    occurances[num] ? occurances[num][1]++ : occurances[num] = [index, 1];
  });
  let result = [];
  for (let key in occurances) {
    if (occurances[key][1] % 2 === 0) {
      if (!result[0] || result[0] > occurances[key][0]) {
        result = [[occurances[key][0]], key];
      }
    }
  }
  return result[1];
};
