/* Write a program to print the sum of numbers from 1 to 50, skipping multiples of 7, using a for loop. */

let sum = 0;

for (let i = 1; i <= 50; i++){
  if (i % 7 == 0) {
    continue; //skipping if multiple of 7
  }
  else {
    sum = sum + i; //adding to sum if not
  }
}

console.log(`The sum is: ${sum}`); //printing sum