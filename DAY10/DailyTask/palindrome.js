/* 
     1
   2 1 2 
  3 2 1 2 3 
 4 3 2 1 2 3 4
5 4 3 2 1 2 3 4 5 
 */

 for (row = 1; row <= 5; row++){
  str = "";
  for (col = 5; col >= row; col--){
    str += " ";
  }
  for (col = row; col >= 1; col--){
    str += `${col} `;
  }
  for (col = 2; col <= row; col++){
    str += `${col} `; 
  }
  console.log(str);
} 
