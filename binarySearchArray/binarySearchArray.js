/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  if (array.length === 0) {return [];}
  var start = 0;
  var end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {return mid;}
    if (target < array[mid]) {
      end = mid - 1;
    } else if (target > array[mid]) {
      if (start === array.length - 1) {return null;}
      start = mid + 1;
    } else {
      return null;
    }
  }
}

var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // null