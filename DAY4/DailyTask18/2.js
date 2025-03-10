/* Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 pay a ticket price of 15. */

//Initializing age variable
age = 45;

//Print message
console.log(`Your ticket price is:`);

//Check age and assign ticket price
if (age < 12) {
  console.log(`5`);
}
else if (age >= 12 && age < 18) {
  console.log(`10`);
}
else if (age >= 18 && age < 60) {
  console.log(`20`);
}
else if (age >= 60) {
  console.log(`15`);
}
else {
  console.log(`Invalid age`);
}
