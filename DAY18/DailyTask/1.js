/* 1.  Convert Kilometers to Miles */

const prompt = require('prompt-sync')({ signint: true });
let distance = prompt("Enter the distance in km : ");

console.log(`Distance in miles(m): ${(Math.round(distance * 0.6214))} m`);