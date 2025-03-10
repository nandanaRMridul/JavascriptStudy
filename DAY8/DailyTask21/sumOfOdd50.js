/* Find the sum of all odd numbers between 1 and 50 using a for loop */

/* initialization */
let sum = 0;

for (let i = 1; i <= 50; i++){
  if (i % 2 !== 0) { //check if not even
    sum = sum + i; //add to sum var
  }
}

console.log(`Sum of odd numbers from 1 to 50: ${sum}`); //printing sum