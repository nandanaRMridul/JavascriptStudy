/* 
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4

*/

for (row = 1; row <= 4; row++){
  row_content='';
  for (col = 1; col <= 4; col++)
  {
    row_content += row;
  }
  console.log(row_content);
}