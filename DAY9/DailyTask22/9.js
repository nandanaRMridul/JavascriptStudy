/* 
1
00
111
0000
11111
*/

for (row = 1; row <= 5; row++){  //increment row from 1 to 5
  let str = '';
  for (col = 1; col <= row; col++){  //increment col from 1 to row
    if (row % 2 == 0) { //check if row is even
      str += "0"; //if true then add 0 to str
    }
    else {
      str += "1"; //else add 1 to str
    }    
  }
  console.log(str); //print final str after each row
}