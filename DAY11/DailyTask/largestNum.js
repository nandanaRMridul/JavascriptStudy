/* 
Create an arrow function findMax that takes two numbers as parameters and returns the larger number.
*/


findMax = (n1, n2) => {
  n1 > n1 ? console.log(`${n1} is the largest.`) : n2 > n1 ? console.log(`${n2} is the largest.`) : console.log(`${n1} is equal to ${n2}`);
}

const prompt = require('prompt-sync')({ sigint: true });
let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

findMax(num1, num2);