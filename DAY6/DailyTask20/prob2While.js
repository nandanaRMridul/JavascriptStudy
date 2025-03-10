/* W.a.p to predict output
Input                   2          3                      4                                 5
Logic     2           2+22    3+33+333       4+44+444+4444         5+55+555+5555+55555      
Output                24         369                 4936                           ?
 */
const prompt = require('prompt-sync')({signint: true}); //add prompt-sync

let input = prompt("Enter a number: "); //prompt user for input
let num = Number(input); 
let t = 0;
let sum = 0; 
let i = 1;

while (i <= num) 
{
  t = (t * 10) + num;
  sum = sum + t;
  i++;
}

console.log(sum); //print output

