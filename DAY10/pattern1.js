/* 
      *
     * *
    * * *
   * * * *

*/

for (let row = 1; row <= 4; row++){ //increment row from 1 to 4
  let str = ''; //initialize empty str
  for (col = 4; col >= row; col--){ //decrement col from 4 to 1
    str += " "; //add space to str
  }
  for (col = 1; col <= row; col++){ //increment col from 1 to 4
    str += `* `; //add * to str
  }
  console.log(str); //print completed str
}