/* 
Write a function greetUser that takes a name and a callback function. The callback should format the name and return a greeting message.
*/

formatName = (str) => {
  formattedName = str.charAt(0).toUpperCase() + str.slice(1);
  return formattedName;
}

greet = (formatName) => {
  let name = formatName(str);
  console.log(`Hello, ${name}`);
}

const prompt = require('prompt-sync')({ sigint: true });
let str = prompt("Enter your name: ");

greet(formatName);