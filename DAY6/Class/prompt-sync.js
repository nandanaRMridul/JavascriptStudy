const prompt = require('prompt-sync')({signint: true});

let input = prompt("Enter a number");
let numberInput = Number(input);

console.log(typeof numberInput);
console.log(numberInput + 5);