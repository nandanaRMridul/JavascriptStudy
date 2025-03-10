/*Write a program to find the GCD of 2 numbers using for loop*/

//initializing variables
let num1 = 20;
let num2 = 68;
let gcd = 1;


for (let i = 1; i <= num1 && i <= num2; i++){//to iterate till the largest number
  if (num1 % i == 0 && num2 % i == 0)//if both num1, num2 divisible by i
  {
    gcd = i;    //update gcd
  }
}

console.log(`GCD: ${gcd}`);//print the largest gcd that is obtained after complete loop