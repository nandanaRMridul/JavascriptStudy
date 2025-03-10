/* Write a program to calculate the factorial of a  number using a while loop. */

//initializing variables
let num = 8; 
let fact= 1;
let i = num;

if (num == 0) {
  fact = 1; //factorial of 0 is 1
}
else if (num < 0) { //case of negative numbers
  console.log("Factorial is not defined for negative numbers.");
}
else {
  while (i >= 1) {
    fact = fact * i;//calculating factorial (8*7*6*5*4*3*2*1)
    i--;
  }
}

console.log(`Factorial of ${num} is: ${fact}`);//printing