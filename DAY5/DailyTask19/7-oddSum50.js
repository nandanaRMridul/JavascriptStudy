/* Write a program that calculates the sum of odd numbers from 1 to 50 using a do-while loop. */

//initializing vriables
let i = 1;
let sum = 0;

do {
  if (i % 2 !== 0) {//check if odd
    sum = sum + i;//update sum
  }
  i++;//update i
} while (i <= 50);//limit of i

console.log(`Sum of all odd numbers from 1 to 50: ${sum}`);//printing