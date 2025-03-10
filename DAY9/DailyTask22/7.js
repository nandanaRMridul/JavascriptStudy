/* 
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/

//uprightRightTriangle
for (row = 1; row <= 5; row++){ //incrementing row from 1 to 5
  let str = ''; //initialize empty str
  for (col = 1; col <= row; col++){ //incrementing col from 1 to row
    str += `${col} `; //add col to str
  }
  console.log(str); //print completed row
}
//invertedRightTriangle
for (row = 4; row >= 1; row--){ //decrementing row from 4 to 1
  let str = ''; //initialize empty str
  for (col = 1; col <= row; col++){ //incrementing col from 1 to row
    str += `${col} `; //add col to str
  }
  console.log(str); //print completed row
}