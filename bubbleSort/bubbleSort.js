/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.


var bubbleSort = function(array) {
  // keep track of swaps
  var swap;
  // outside loop looks at first element and increment
  for (var i = 0; i < array.length; i++) {
    // inner loop looks at one after first element  and increment
    for (var j = i + 1; j < array.length; j++) {
      //  if value first element is greater than next element
      if (array[i] > array[j]) {
      // es6 swap 2 variables:  [arr[x],arr[y]] = [arr[y],arr[x]]
        // swap the variables
        [array[i],array[j]] = [array[j],array[i]];
        swap = true;
    // else do nothing and end this loop so we can compare next variables
      } else {
        swap = false;
        // break??
      }
    }
  }
  // return array which we mutated in place
  return array;
};
          //i  j
bubbleSort([2, 1, 3]); // yields [1, 2, 3]
          //j  i