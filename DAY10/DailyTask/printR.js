/* 

# # # # # # #
#             #
#             #
# # # # # # #
#             # 
#             #
#             #

*/

for (row = 1; row <= 7; row++){
  let str = '';
  for (col = 1; col <= 8; col++){
    if ((col == 1) || (row == 1 && col !== 8) ||(row == 4 && col !== 8) || (col == 8 && row !== (1 && 4))){
      str += '# ';
    }
    else {
      str += '  ';
    }
  }
  console.log(str);
}