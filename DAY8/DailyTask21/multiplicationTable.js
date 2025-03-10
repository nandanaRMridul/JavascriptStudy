/* Print the multiplication table of the given number (eg : 5) */

//prompt the user for n
const prompt = require('prompt-sync')({ signint: true });
let input = prompt("Enter a number: ");
let n = Number(input);
//initializing pdt var
let pdt = 0;

for (let i = 1; i <= 10; i++){
  pdt = n * i;
  console.log(`${i} x ${n} = ${pdt}`);
}