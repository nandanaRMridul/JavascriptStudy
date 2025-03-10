/* 
  *****
 *****
*****
 *****
  *****
*/

for (row = 1; row <= 5; row++){
  str = '';
  for (col = 1; col <= 7; col++){
    if (((row == 1 || row == 5) && (col <= 2)) || ((row == 2 || row == 4) && (col == 1 || col == 7)) || ((row == 3) && (col >= 6))) {
      str += '  ';
    }
    else {
      str += '* ';
    }
  }

  console.log(str);
}