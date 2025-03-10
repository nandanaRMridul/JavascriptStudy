/* W.a.p to predict output
Input                   2          3                      4                                 5
Logic     2           2+22    3+33+333       4+44+444+4444         5+55+555+5555+55555      
Output                24         369                 4936                           ?
 */
const prompt = require('prompt-sync')({signint: true}); //add prompt-sync

let input = prompt("Enter a number: "); //prompt user for input
let n = Number(input); //change user input from string to number type and store in n 
let strTerm = ""; //initialize a string var
let sum = 0; //initialize sum var

for (i = 1; i <= n; i++) //loop from i = 1 to n
{
  let numTerm = 0; //initialize a num var to conv string var to num and store
  strTerm = strTerm + n; //string concatenation to get n, nn, nnn terms
  numTerm = Number(strTerm); //converting str terms to num (n, nn, nnn, ..)
  sum = sum + numTerm; //calculating sum (n + nn + nnn +..)
}

console.log(sum); //print output


