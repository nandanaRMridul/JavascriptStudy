 /* 
 *
 * *
 * * *
 * * * *
 */


for (row = 1; row <= 4; row++){ //creating each row
  row_content = ''; //reinitialize empty string in each iteration
  for (col = 1; col <= row; col++){ //creating each col, col number = row number
    row_content += '* '; //concatenating * in each col creation
  }
  console.log(row_content); //print completed row
}