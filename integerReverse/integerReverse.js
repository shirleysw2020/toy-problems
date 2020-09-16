/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/

//876
function reverseInteger(number) {
  var revNumber = 0;
  while (number > 0) {
    revNumber = (revNumber * 10) + (number % 10);
    number = Math.floor(number / 10);
  }
  return revNumber;
}

//number = 876
//revnumber = (0 * 10 ) + 876 % 10 --> (6)
//revnumber = 6
//number = 876/10 --> (87.6)

console.log('mode 10:', 876 % 10)
// console.log('678 mode 10', 678 % 10)
console.log('87.6 % 10 is: ', 87.6 % 10)
console.log(reverseInteger(98756));