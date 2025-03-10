/* Write a  program to calculate the sum of all even numbers between 1 and 50 using a for loop. */

//initializing variables
let sum = 0;

for (let i = 0; i <= 50; i++)//iterating from 1 to 50
{
  if (i % 2 == 0)//check is i is even
  {
    sum = sum + i;//update sum if i even
  }
}

console.log(`Sum of all even numbers from 1 to 50 : ${sum}`);//print final sum