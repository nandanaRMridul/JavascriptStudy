/* 
Write a JavaScript function that takes two numbers as input and returns the larger number. If both numbers are equal, return either of them.
*/

function largest(n1, n2) {
  if (n1 > n2)
  {
    return n1;
  }
  else if (n2 > n1)
  {
    return n2;
  }
  else {
    return n1;
  }
}

const prompt = require('prompt-sync')({ sigint: true });
let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

console.log(`Largest: ${largest(num1, num2)}`);
 