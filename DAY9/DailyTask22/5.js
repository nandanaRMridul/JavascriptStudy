/*
1 *
1 * 3
1 * 3 *
1 * 3 * 5

 */

for (row = 1; row <= 5; row++){  //increment row from 1 to 5
  let str = '';
  for (col = 1; col <= row; col++){  //increment col from 1 to row
    if (col % 2 == 0) { //check if col is even
      str += "* "; //if true then add * to str
    }
    else {
      str += `${col} `; //else add col to str
    }    
  }
  console.log(str); //print final str after each row
}