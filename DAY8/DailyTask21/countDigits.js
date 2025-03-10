/* Write a program to count the number of digits in a number? */

//prompt the user for a num
const prompt = require('prompt-sync')({ signint: true });
let input = prompt("Enter a number: ");
let num = Number(input);
let temp = num;
//initializing counter
let count = 0;

while (num > 0) {
  let digit = num % 10;
  count++;
  num = Math.floor(num - digit) / 10;
}

console.log(`The number of digits in ${temp}: ${count}`);