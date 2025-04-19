/* 
*
**
* *
*  *
*****
*/

/* for (let i = 1; i <= 5; i++){
  str = "";
  for (let j = 1; j <= i; j++){
    if (i == 1 || i == 5 || j == i || j == 1) {
      str += j + " ";
    }
    else {
      str += "  "
    }
  }
  console.log(str);
} */

for (let i = 1; i <= 5; i++){
  str = "";
  for (let j = 1; j <= i; j++){
    if (i == 1 || i == 5 || j == i || j == 1) {
      str += "* ";
    }
    else {
      str += "  "
    }
  }
  console.log(str);
}