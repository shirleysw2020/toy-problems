/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  if (number === 0) { return null;}
  if (Math.floor(number) === number) {
    return Math.floor(number) + ('/1');
  } else {
    // return number.concat('/1');
    return (number * 2) + '/2';
  }
  // if rounding down the given number is still equal to original number (take into account it mgiht get rid of the float after decimal, so might not be a good measurement of equality...)
    // but if yes/ equal -> thenreturn stringify version of number plus slash plus 1
  // else if different
    // number times 2 then / 2
};

console.log(toFraction(2.5))