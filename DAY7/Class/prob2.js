//write a js program that prompts the user for an exponent value and prints all numbers whose exponentiation falls between 8 and 36.

const prompt = require('prompt-sync')({signint: true});

let input = prompt("Enter an exponent value: ");
let exp = Number(input);
let i = 1;
let num = 1;


while (i <= 36) {
  num = i ** exp;
  if (num >= 8 && num <= 36)
  {
    console.log(i);
  }
  i++;
} 
