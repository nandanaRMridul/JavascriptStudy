/* 
5 4 3 2 1
5 4 3 2
5 4 3
5 4
5
*/

for (row = 1; row <= 5; row++){  //increment row from 1 to 5
  let str = '';   //empty str declaration            
  for (col = 5; col >= row; col--){  //decrement col from 5 to row
    str += `${col} `;  //concatenate col to str
  }
  console.log(str); //print final str after each row
}