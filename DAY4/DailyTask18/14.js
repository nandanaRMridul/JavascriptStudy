/* Write a program that takes three numbers as input and determines the largest among them.
If all three numbers are equal, print "All numbers are equal".
Otherwise, print the largest number.
 */

//Initializing num1, num2 and num3 variables
num1 = 5;
num2 = 25;
num3 = 100;

//Checking which number is the largest
if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is the largest`);
}else if (num2 > num1 && num2 > num3 ) {
  console.log(`${num2} is the largest`);
}else if (num3 > num1 && num3 > num2 ) {
  console.log(`${num3} is the largest`);
}else if (num1 == num2 == num3 ) {
  console.log(`All numbers are equal`);
}else {
  console.log(`Invalid`);
}