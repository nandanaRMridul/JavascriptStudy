/* Write a program to print the squares of numbers from 1 to 10, but only print the squares that are multiples of 4, using a while loop. */

//initializing variables
let i = 1;

while (i <= 10)//limit of i
{
  if ((i * i) % 4 == 0) {//checking if squares are multiples of 4
    console.log(i * i);//printing square
  }
  i++;//updating i
}