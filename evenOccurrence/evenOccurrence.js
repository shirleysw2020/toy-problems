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
  if (arr.length === 0) {return null;}
  var map = {};

  for (var i = 0; i <= arr.length; i++) {
    if (!map.hasOwnProperty(arr[i])) {
      map[arr[i]] = false;
    } else {
      map[arr[i]] = !map[arr[i]]
    }
  }

  for (var key in map) {
    if (map[key] === true) {
      return key;
    }
  }
  return null;
}


var onlyEven = evenOccurrence([1, 3, 8, 2, 6, 1, 8, 6, 6]);
console.log(onlyEven); //  4

//if find the same, slice out the element from array.