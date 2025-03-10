/* 
1
2    3
4    5    6
7    8    9    10
11   12   13   14  15
 */

let count = 1; //initialize a counter var to update print value

for (row = 1; row <= 5; row++){  //increment row from 1 to 5
  let str = '';   //empty str declaration            
  for (col = 1; col <= row; col++){  //increment col from 1 to row
    str += `${count} `;  //concatenate count to str
    count++; //update count = count + 1
  } 
  console.log(str); //print final str after each row
}