/* 
5 4 3 2 1
4 3 2 1
3 2 1
2 1
1
 */

for (row = 5; row >= 1; row--){  //decrement row from 5 to 1
  let str = '';   //empty str declaration            
  for (col = row; col >= 1; col--){  //decrement col from row to 1
    str += `${col} `;  //concatenate col to str
  }
  console.log(str); //print final str after each row
}