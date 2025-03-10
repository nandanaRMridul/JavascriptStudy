/* w.a.p to find the factorial of a number using a for loop */

//initializing variables
let num = 6;
let fact = 1;


if (num == 0) {
  fact = 1; //factorial of 0 is 1
}
else if (num < 0) { //case of negative numbers
  console.log("Factorial is not defined for negative numbers.");
}
else {
  for (let i = num; i >= 1; i--) {
    fact = fact * i;//calculating factorial (6*5*4*3*2*1)
  }
}

console.log(`Factorial of ${num} is: ${fact}`);//printing