/* Write a program to find the Largest and Smallest Digit in a Number */

//prompt the user for a num
const prompt = require('prompt-sync')({ signint: true });
let input = prompt("Enter a number: ");
let num = Number(input);
let temp = num;
//initializing largest and smallest var
let smallest = 9;
let largest = 0;


while (num > 0) {
  let digit = num % 10; //removing last digit

  if (digit >= largest) { //check if digit > largest (0 at first then keeps updating)
    largest = digit; //assign digit to largest if larger
  }
  if (digit <= smallest) { //check if digit < smallest (9 at first then keeps updating)
    smallest = digit; //assign digit to smallest if smaller
 }
  num = Math.floor(num - digit) / 10; //update num
}

//printing largest and smallest
console.log(`The largest digit in ${temp}: ${largest}`);
console.log(`The smallest digit in ${temp}: ${smallest}`);
