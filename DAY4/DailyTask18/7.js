/* Write a program that classifies a single character (eg: input = 'A') as a digit (0-9), uppercase letter(A-Z), lowercase letter(a-z), or other character. */

//Initializing char variable
char = '#';

//Checking if char is a digit, lowercase letter, uppercase letter or other character
if (char >= '0' && char <= '9') {
  console.log(`${char} is a Digit`);
} else if (char >= 'A' && char <= 'Z') {
  console.log(`${char} is an Uppercase Letter`);
} else if (char >= 'a' && char <= 'z') {
  console.log(`${char} is a Lowercase Letter`);
} else {
  console.log(`${char} is Other Character`);
}