/* 
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4
*/

for (row = 1; row <= 4; row++){
  str = '';
  for (col = 1; col <= 4; col++){
   /*  str += col; //concatenate each col num to str */
    str += `${col} `;
  }
  console.log(str);
}