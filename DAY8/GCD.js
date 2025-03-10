//w.a.p to find G.C.D/H.C.F of two numbers

const prompt = require('prompt-sync')({ signint: true });

//prompting the user for 2 nums
let input1 = prompt("Enter the first number: ");
let num1 = Number(input1);

let input2 = prompt("Enter the second number: ");
let num2 = Number(input2);

let gcd = 1;
let smallerNum;

/* check which num is the smallest */
if (num1 <= num2)
{
  smallerNum = num1;
}
else {
  smallerNum = num2;
}

for (let i = 1; i <= smallerNum; i++)
{
  if (num1 % i == 0 && num2 % i == 0)/* find common div of num1, num2*/
  {
    gcd = i;
  }
}

//printing the gcd of num1 and num2
console.log(`GCD of ${num1} and ${num2} is ${gcd}`);