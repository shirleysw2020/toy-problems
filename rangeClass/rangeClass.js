/**
 * Build a class to represent a range of numbers that takes:
 *   - a beginning index,
 *   - an end index (optional)
 *     If there is no end index, the range should include only the passed-in start value.
 *   - a 'step' (optional)
 *     The step is the interval at which elements are included.
 *     For instance, a step of 1 includes every element in the range,
 *     while a step of 2 includes every other element.
 *
 * The range should have a constructor that accepts these arguments in that order.
 *
 * It should also support the following utility functions:
 *   - size(): return the number of items represented by the range
 *   - each(callback(index)): iterate over the range, passing each value to a callback function
 *   - includes(index): return whether or not the range includes the passed value
 *
 * You should also be aware of the following caveats:
 *   - You should allow a negative value for 'step' to count backwards.
 *   - If no step is provided, it should default to 1.
 *   - If the start value is greater than the end value, assume we're counting backwards.
 *   - Should return null if we are given no 'start' value.
 *
 * Range should use constant space, even during the `each` method. i.e. you should *not*
 * use an Array as backing storage. Any given range could potentially be thousands of numbers long,
 * so find a way to represent the range without actually storing each element.
 *
 * USAGE EXAMPLES:
 * var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)
 *
 * var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.
 * evenNumbers.each(function(val){
 *   console.log(val+"!");
 * });
 * console.log("Who do we appreciate!?");
 *
 * evenNumbers.size() should be 4
 * evenNumbers.includes(2) should be true, evenNumbers.includes(3) should be false
 */

//  end and step are optional
var Range = function(start, end, step) {
  this.start = start;
  this.end = end;
  this.step = step || 1;
};

Range.prototype.size = function () {
  // just incase if start is 0 we dont wannna do num / 0 -> give us infinity
  if (this.start === 0) {
    this.start = this.start + 1;
    this.end = this.end + 1;
  } else {
    this.start = this.start;
  }
  // if end exist then do end minus start divide by step
  return this.end ? Math.floor((this.end - this.start) / this.start) :
  Math.floor(this.start / this.step);
};

Range.prototype.each = function (callback) {
  if (this.start < this.end) {
    for (var i = this.start; i <= this.end; i += this.step) {
      callback(i);
    }
    // numbers descending
  } else if (this.start > this.end) {
    if (this.step < 0) {
      for (var i = this.start; i >= this.end; i += this.step) {
        callback(i);
      }
      // if no step given
    } else {
      for (var i = this.start; i >= this.end; i -= this.step) {
        callback(i);
      }
    }
  }
};

Range.prototype.includes = function (val) {
  // if end doesn't exist
  if (isNaN(this.end)) {
    return this.start === val;
    // if end exist
  } else if (this.end && val <= this.end && val >= this.start) {
    return true;
  }
  return false
};


var myRange = new Range(0,10);
console.log('whats myrange',myRange);
console.log('whats myrange size',myRange.size());
console.log('what myRange include:', myRange.includes(4));

var evenNumbers = new Range(2,100,2);
console.log('whats evenNumbers size',evenNumbers.size());
console.log('what evennumbers include:', evenNumbers.includes(9));