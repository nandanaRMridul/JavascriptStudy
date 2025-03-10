/* Find the sum of all numbers between 1 and n that are divisible by 3 and 5 using for loop */

//prompt the user for n
const prompt = require('prompt-sync')({ signint: true });
let input = prompt("Enter a number: ");
let n = Number(input);
//initializing sum var
let sum = 0;

for (let i = 0; i <= n; i++){
  if (i % 3 == 0 && i % 5 == 0) {//checking if div by 3, 5
    sum = sum + i; //adding to sum var
  }
}

console.log(`Sum: ${sum}`); // printing sum