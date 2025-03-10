/* w.a.p to find and print all prime numbers between 1 and 50 using while */

//initializing variables
let num = 2;//since 0, 1 not prime
let i;
let isPrime;

while (num <= 50) {
  isPrime = true;//default isPrime value
  i = 2;//reset for each new num
  while (i < num) {//prime num - divisible by one and itself only, checking till num
    if (num % i == 0) {
      isPrime = false;//if divisible by other values not prime
      break;
    }
    i++;//updating iteration variable
  }
  if (isPrime) {
      console.log(j);//isPrime - true itself if not divisible by other values
    }
  num++;//updating to new num
}