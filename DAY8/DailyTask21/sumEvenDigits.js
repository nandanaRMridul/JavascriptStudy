/* Write a program to find the sum of even digits of a given number? */

//prompt the user for a num
const prompt = require('prompt-sync')({ signint: true });
let input = prompt("Enter a number: ");
let num = Number(input);

//initialization
let temp = num;
let sum = 0;


while (num > 0) {
  let digit = num % 10;
  if (digit % 2 == 0) { //check if digit is even
    sum = sum + digit; //take sum
  }
  num = Math.floor(num - digit) / 10;
}

console.log(`The sum of even digits in ${temp}: ${sum}`); //print sum