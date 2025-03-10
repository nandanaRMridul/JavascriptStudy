/* W.a.p to check a 3 digit number is an armstrong number,
123 = 1^3 + 2^3 + 3^3 */

const prompt = require('prompt-sync')({signint: true}); //add prompt-sync

let input = prompt("Enter a 3 digit number: "); //prompt user for input
let num = Number(input); //change user input from string to number type and store in num
let temp = num; //store num value
let sum = 0; //initialize sum var
let digit = 0; //initialize digit var to store each digit
 
for (let i = 1; i <= 3; i++)
{
  digit = num % 10; //get last digit
  num = Math.floor(num / 10); //remove last digit and update num
  sum = sum + (digit**3); //take sum of cubes of each digit
}

if (temp == sum) { //check if num = (sum of cubes of each digit)
  console.log("The number entered is an Armstrong number.");
}
else {
  console.log("The number entered is not an Armstrong number.");
}


