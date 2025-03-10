/* Write a program using recursive function to implement countdown timer(numbers should be displayed with a delay of 1 second between them) */


function countdown(num) {
  if (num < 1) {
    return; // To stop when num reaches 0
  }

  setTimeout(() => {
    console.log(num);
    countdown(num - 1); // Calling the fn again but with updated num
  }, 1000); // Delay of 1 second for each num
}

const prompt = require('prompt-sync')({ sigint: true });
const num = Number(prompt("Enter a number to set countdown: "));

countdown(num);