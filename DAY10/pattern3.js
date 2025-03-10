/* 
# # # # #
#       #
#       #
# # # # #
*/

for (row = 1; row <= 4; row++){
  let str = '';
  for (col = 1; col <= 5; col++)
  {
    if ((row == 1) || (row == 4) || (col == 1) || (col == 5))
    {
      str += "# ";
    }
    else {
      str += "  ";
    }
  }
  console.log(str);
}