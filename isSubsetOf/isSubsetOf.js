/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
  // i - array
  // o - boolean
  // c - none
  // e - input is empty then just return null

  // only takes one miss for function to return false.
  let isSubset = true;
  for (let el of this) {
    if (arr.includes(el) == false) {
      isSubset = false;
    }
  }
  return isSubset;
};

// var a = ['commit','rebase'];
// console.log(a.isSubsetOf(['commit','rebase','push','blame'])) // true
