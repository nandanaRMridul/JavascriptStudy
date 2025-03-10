/* 
1010
0101
1010
0101
 */
col = 0;


for (i = 1; i <= 4; i++){
  str = '';
  for (j = 1; j <= 4; j++){
    if ((i % 2 == 0 && j % 2 == 0) || (i % 2 !== 0 && j % 2 !== 0)){
      str += 1;
    }
    else {
      str += 0;
    } 
  }
  console.log(str);
}