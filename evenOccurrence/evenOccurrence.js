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

//1st approach:
// var evenOccurrence = function(arr) {
//   // Your code here.
//   if (arr.length === 0) {return null;}
//   //handle multiple even-occurrence items and return the first one - return the lesser i!
//   var count = 1;
//   // outer loop starts from first element
//   for (var i = 0; i < arr.length; i++) {
//     // inner loop starts from second element
//     for (var j = i + 1; j < arr.length; j++) {
//       // if j is equal to i
//       if (arr[j] === arr[i]) {
//         // count increment
//         count++;
//       }
//     }
//     // if number of times j occurs is even number
//     if (count % 2 === 0) {
//       // return value at i.
//       return arr[i];
//     }
//   }
// };

//  8 5 8 8 9 my test doesn't work when rhere are 3 of the same number.

//2nd method: slice out the numfrom the array when match with current nnumber:
var evenOccurrence = function(arr) {
  // Your code here.
  if (arr.length === 0) {return null;}
  var sliced = 0;

  for (var i = 0; i < arr.length; i++) {
    slice = 0;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        // [2, 8, 2, 8, 8, 9]. example
        // slice out the matched value
        arr.slice(j, 1)
        sliced++;
      }
      if (sliced % 2 === 1) {return arr[i];}
      // slice out i because we found no match for it in entire arr
      arr.slice(i, 1)
    }
  }
}
var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4

//if find the same, slice out the element from array.