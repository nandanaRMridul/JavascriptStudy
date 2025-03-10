/* Write a program to check if a given number is a multiple of 7. */

//Initializing num variable

num = 33;

//Checking if num is divisible by 7

if (num % 7 == 0) {
  console.log(`${num} is a multiple of 7`);
}
else if (num % 7 != 0) {
  console.log(`${num} is not a multiple of 7`);
}
else {
  console.log(`Invalid entry`);
}