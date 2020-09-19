/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // only look up divisor up to square root of n
  // if n is negative, make it positive
  const limit = Math.sqrt(Math.abs(n));
  // 1 is not a prime number, just return early
  if (n === 0) {return false}
  // loop from 2 to limit
  for (var i = 2; i <= limit; i++) {
    if (n % 1 === 0) {return false}
  }
  return true;
  // TODO: return true if n is prime, false otherwise
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

// var primeSieve = function (start, end) {
// };


console.log(primeTester(15));