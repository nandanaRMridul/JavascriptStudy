/* 
* * * * *
 * * * *
  * * *
   * *
    *
* * * * * 
* * * * *
* * * * *
* * * * *
* * * * *
    *
   * *
  * * *
 * * * *
* * * * *      
*/

for (let row = 1; row <= 5; row++){ 
  let str = ''; 
  for (col = 1; col < row; col++){ 
    str += " "; 
  }
  for (col = 5; col >= row; col--){ 
    str += `* `; 
  }
  console.log(str); 
}

for (row = 1; row <= 5; row++){
  let str = '';
  for (col = 1; col <= 5; col++)
  {
      str += "* "; 
  }
  console.log(str);
}
for (let row = 1; row <= 5; row++){ 
  let str = ''; 
  for (col = 4; col >= row; col--){ 
    str += " ";
  }
  for (col = 1; col <= row; col++){ 
    str += `* `;
  }
  console.log(str); 
}