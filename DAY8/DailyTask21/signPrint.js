/* wap to find the sign of the product of three numbers. Display an alert box with the specified sign.
eg:Sample numbers : 3, -7, 2
Output : The sign is -
 */

//prompt the user for 3 numbers
const prompt = require('prompt-sync')({ signint: true });
let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let num3 = Number(prompt("Enter third number: "));

if (num1 * num2 * num3 < 0) {
  console.log(`The sign is -`);
}
else {
  console.log(`The sign is +`);
}
