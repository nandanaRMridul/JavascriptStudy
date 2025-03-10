/* 
* * * *
* * *
* *
*
*/


for (row = 1; row <= 4; row++){ 
  str = '';
  for (col = 4; col >= row; col--) //4 3 2 1 //decrement col
  {
    str += '* ';
  }
  console.log(str);
}


/* for (row = 4; row >= 1; row--){ //decrement row
  str = '';
  for (col = 1; col <= row; col++) //1 2 3 4
  {
    str += '* ';
  }
  console.log(str);
}
 */