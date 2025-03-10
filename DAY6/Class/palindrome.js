/* w.a.p to check if a number is a palindrome or not */

num = 7557;
numReversed = "";

while (num > 0) {
  lastDigit = num % 10;
  numReversed += lastDigit;
  num = Math.floor(num / 10);
}

num == numReversed ? console.log("The given number is a palindrome"): console.log("The given number is  not a palindrome")