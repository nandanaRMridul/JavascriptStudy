//w.a.p to check if the given number is a prime number

const prompt = require('prompt-sync')({signint: true});

let input = prompt("Enter a number: ");
let num = Number(input);

/* Initializing variables */
isPrime = true;

/* To print not prime if 1, 0 is entered*/
if (num < 2) {
  isPrime = false;
}

/* Check if prime or not */
for (let i = 2; i <= num/2; i++){
  if (num % i == 0) {
    isPrime = false;
    break;
  } 
}

/* print */
isPrime ? console.log(`${num} is a prime number`) : console.log(`${num} is not a prime number`);
