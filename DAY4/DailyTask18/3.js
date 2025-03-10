/* Write a program on fuel price alert,with the following conditions.
Price below Rs. 90- affordable 
Price between Rs.90-120 - moderate 
Price above 120 - expensive
 */

//Initializing fuelPrice variable
fuelPrice = 80;

//Checking and categorizing based on price
if (fuelPrice < 90) {
  console.log(`Affordable`);
}
else if (fuelPrice >= 90 && fuelPrice < 120) {
  console.log(`Moderate`);
}
else if (fuelPrice >= 120) {
  console.log(`Expensive`);
}
else {
  console.log(`Invalid entry`);
}