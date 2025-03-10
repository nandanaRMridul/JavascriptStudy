/* 
Write a recursive function that takes a number and returns the sum of all numbers within the range from 1 to that number.
 */

findSum = (n) => {
  if (n == 1) {
    return 1;
  }
  return n + findSum(n - 1);
}

const prompt = require('prompt-sync')({ sigint: true });
let limit = Number(prompt("Enter a limit: "));

console.log(`Sum of numbers from 1 to ${limit}: ${findSum(limit)}`);