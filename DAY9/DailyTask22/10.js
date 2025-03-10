/* 
2
2 4
2 4 6
2 4 6 8 
2 4 6 8 10
*/

for (row = 1; row <= 5; row++){  //increment row from 1 to 5
  let str = '';
  for (col = 1; col <= row; col++){  //increment col from 1 to row
    str += `${col * 2} `; //add col * 2 to str
  }
  console.log(str); //print final str after each row
}