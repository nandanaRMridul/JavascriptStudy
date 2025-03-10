/* 
Write a recursive function that calculates the factorial of a number. Each step of the calculation (multiplying by the current number) should be displayed in the console with a 500ms delay between each step.
 */

/* function delayedFactorial(n, result = 1, i = 1) {
  if (i > n) {
    console.log("Factorial:", result);
    return;
  }

  setTimeout(() => {
    result *= i;
    console.log(`Step ${i}: ${result}`);
    delayedFactorial(n, result, i + 1);
  }, 500);
}

const prompt = require('prompt-sync')({ sigint: true });
const num = Number(prompt("Enter a number to calculate its factorial and display each step after a delay: "));

delayedFactorial(num); */

function delayedFactorial(n, fact = 1, i = 1) {
  if (i > n) {
    console.log("Factorial:", fact);
    return;
  }

  setTimeout(() => {
    console.log(`Step ${i}: ${fact * i}`);
    delayedFactorial(n, fact * i, i + 1);
  }, 500);
}

const prompt = require('prompt-sync')({ sigint: true });
const num = Number(prompt("Enter a number to calculate its factorial with delays: "));

delayedFactorial(num);