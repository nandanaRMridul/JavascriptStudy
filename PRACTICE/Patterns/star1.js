/* 
  *
  *
*****
  *
  *
 */

for (row = 1; row <= 5; row++){
  str = '';
  for (col = 1; col <= 5; col++){
    if ((row == 3)  || (col == 3)) {
      str += '*';
    }
    else {
      str += ' ';
    } 
  }
  console.log(str);
}