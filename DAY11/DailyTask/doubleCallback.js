/* 
Write a function process that takes a number and a callback function. The function should call the callback with the number doubled. also find out if the doubled number is odd or even
*/

function oddOrEven(n) {
  n % 2 == 0 ? console.log(`Double: ${n}, Even number`) : console.log(`Double: ${n}, Odd number`);
}

function doubleNum(n, oddOrEven) {
  let double = num * 2;
  oddOrEven(double);
}


const prompt = require('prompt-sync')(({ sigint: true }));
let num = Number((prompt("Enter a number: ")));

doubleNum(num, oddOrEven);