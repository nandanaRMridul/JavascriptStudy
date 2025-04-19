/* 
    *    
   * *   
  *   *  
 *     * 
*********

*/

for (let i = 1; i <= 5; i++) {
  str = "";
  for (let j = 5; j >= 1; j--) {
    if (i == j || i == 5 ) {
      str += "*";
    } else {
      str += " ";
    }
  }
  for (let j = 1; j <= 5; j++) {
    if (j == i && i != 1 || i == 5) {
      str += "*";
    } else {
      str += " ";
    }
  }
  console.log(str);
}