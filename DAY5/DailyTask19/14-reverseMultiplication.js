/* write a program to do reverse multiplication of a number using do while loop */

//initializing variables
let num = 5;
let i = num;

do {
  console.log(`${num} x ${i} = ${num * i}`); //printing multiplication table
  i--; //updating i
} while (i >= 1); //limit of i
