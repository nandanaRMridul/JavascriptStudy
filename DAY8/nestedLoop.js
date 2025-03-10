/* w.a.p to print 
# # # #
# # # #
# # # #
# # # #

*/

for (let i = 1; i <= 4; i++) //row
{
  let row_content = ''; //redeclare to prevent repeated concatenation
  for (let j = 1; j <= 4; j++) { //col
    row_content += '# '; //string concatenation
  }
  console.log(row_content);
}