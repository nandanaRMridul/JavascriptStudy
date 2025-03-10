/* 1 2 3 4 5
  1 2 3 4
  1 2 3 
  1 2 
  1 
 */


 for (row = 5; row >= 1; row--){ //decrement row
  str = '';
  for (col = 1; col <= row; col++) //1 2 3 4 5
  {
    str += '* ';
  }
  console.log(str);
}
for (row = 1; row <= 4; row++){ 
  str = '';
  for (col = 4; col >= row; col--) //4 3 2 1 //decrement col
  {
    str += '* ';
  }
  console.log(str);
}