/* Reverse a number */

num = 547;
numReversed = 0; //numReversed = ""

while (num > 0) {
  lastDigit = num % 10; //5
  numReversed = (numReversed * 10) + lastDigit; //numReversed += lastDigit
  num = Math.floor(num / 10);
}

console.log(numReversed);