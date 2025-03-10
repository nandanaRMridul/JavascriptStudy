/* Write a function to convert Celsius to Fahrenheit */


toFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32;
}

const prompt = require('prompt-sync')({ sigint: true });
let temp = prompt("Enter the temperature in celsius: ");

console.log(`Temperature in Fahrenheit : ${toFahrenheit(temp)}°F`);