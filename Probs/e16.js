/* 
1
2 3
4 5 6
7 8 9 10 */

let count = 0;
for (let i = 0; i <= 3; i++){
  str = "";
  for (let j = 0; j <= i; j++) {
    count++;
    str += count + " " ;
  }
  console.log(str);
}
