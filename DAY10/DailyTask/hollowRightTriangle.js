/* 
* 
* *
*   *
*     *
********
*/

for (row = 1; row <= 5; row++)
{
  str = "";
  for (col = 1; col <= 8; col++)
  {
    if ((col == 1) || (row == 5) || ((2 * row) - 1 == col))
    {
      str += "*";
    }
    else {
      str += " "
    }
  }
  console.log(str);
  
}