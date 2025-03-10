/* w.a.p to print 
  c1 c2 c3 c4
 r1 # # # #
 r2 # # # #
 r3 # # # #
r4  # # # #
*/

for (row = 1; row <= 4; row++){ //create each row
  let row_content = ''; //reinitialize empty content string
  for (col = 1; col <= 4; col++){ //create each col in current row
    row_content += '# '; //concatenate # in each iteration
  }
  console.log(row_content); //print completed row of content
}