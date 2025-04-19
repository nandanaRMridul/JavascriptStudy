/* 
1
1 2
1 2 3
1 2 3 4
*/

for (let i = 1; i <= 4; i++)
{
  str = "";
  for (let j = 1; j <= i; j++)
  {
    str += j + " ";
  }
  console.log(str);
}