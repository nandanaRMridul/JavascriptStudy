/* 
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
 */

for (row = 1; row <= 5; row++){  //increment row from 1 to 5
  let str = '';
  for (col = 1; col <= row; col++){  //increment col from 1 to row
    str += `${row} `; //add row to str   
  }
  console.log(str); //print final str after each row
}