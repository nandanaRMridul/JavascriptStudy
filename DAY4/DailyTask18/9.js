/* Write a program that checks if a number is divisible by both 3 and 5. If it is, print "FizzBuzz", if it's divisible by 3 only, print "Fizz", and if divisible by 5 only, print "Buzz". Otherwise, print the number itself. */

//Initializing num variable
num = 25;

//Checking if divisible by both 3 , 5 and printing FizzBuzz if true
if (num % 3 == 0 && num % 5 == 0) {
  console.log(`FizzBuzz`); 
}
//Checking if divisible by 3 and printing Fizz if true
else if (num % 3 == 0 ) {
  console.log(`Fizz`);
}
//Checking if divisible by 5 and printing Buzz if true
else if (num % 5 == 0) {
  console.log(`Buzz`);
}
else {
  console.log(`Invalid entry`);
}