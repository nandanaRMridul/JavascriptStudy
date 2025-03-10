/* Write a program to calculate the electricity bill based on the unit consumed . For the first 100 units price of ₹2/unit . For the next 100 unit price of ₹4/unit . For units above 200 a price of ₹6/unit . */

//Initializing unitsConsumed variable
unitsConsumed = 400;

//100*2 + 100*4 + 100*6

//Calculating the bill amount and printing it
if (unitsConsumed <= 100) {
  console.log(`Your electricity bill is ₹ ${unitsConsumed*2}`);
}
else if (unitsConsumed > 100 && unitsConsumed <= 200) {
  console.log(`Your electricity bill is ₹ ${unitsConsumed*4}`);
}
else if (unitsConsumed > 200) {
  console.log(`Your electricity bill is ₹ ${unitsConsumed*6}`);
}
else {
  console.log(`Invalid entry`);
}