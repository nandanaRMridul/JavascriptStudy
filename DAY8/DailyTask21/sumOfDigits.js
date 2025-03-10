/* Find the sum of digits of a given number using a loop.
 */

const prompt = require('prompt-sync')({ signint: true });

//prompting the user 
let input = prompt("Enter a number: ");
let num = Number(input);
let temp = num;
//initializing sum var
let sum = 0;

while (num > 0) {
  digit = num % 10; //removing each digit
  sum = sum + digit; //adding digits
  num = Math.floor(num - digit) / 10; //updating num var
}

console.log(`Sum of digits of ${temp}: ${sum}`); //printing sum