/* Reverse a Number Without Converting to String using while Eg: 547 to 745 */

//initializing variables
let num = 547;
let numReversed = 0;

while (num > 0) {//checking if num is greater than 0
  let digit = num % 10; //obtaining last digit
  numReversed = (numReversed * 10) + digit; //updating numReversed to store last digit
  num = (num - digit) / 10;//updating num by removing last digit
}

console.log(numReversed);//printing reversed num