/* 
A A A A A
A A A A
A A A
A A
A
B
B B
B B B
B B B B
B B B B B
*/

//invertedtRightAngledTriangle
for (row = 1; row <= 5; row++){  //increment row from 1 to 5
  let str = '';   //empty str declaration            
  for (col = 5; col >= row; col--){  //decrement col from 5 to row
    str += `A `;  //concatenate A to str
  }
  console.log(str); //print final str after each row
}
//uprightRightAngledTriangle
for (row = 1; row <= 5; row++){  //increment row from 1 to 5
  let str = '';   //empty str declaration            
  for (col = 1; col <= row; col++){  //increment col from 1 to row
    str += `B `;  //concatenate B to str
  }
  console.log(str); //print final str after each row
}