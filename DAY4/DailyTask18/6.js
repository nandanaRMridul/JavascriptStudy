/* Write a program that determines the shipping cost based on the order amount. 
If the order amount is $100 or more, shipping is free.
If the order amount is between $50 and $99, the shipping cost is $5.
If the order amount is less than $50, the shipping cost is $10.
 */

//Initializing orderAmount variable
orderAmount = 4;

//Checking orderAmount and determining shipping costs

if (orderAmount >= 100) {
  console.log(`Your shipping cost is free`);
}
else if (orderAmount >= 50 && orderAmount < 100) {
  console.log(`Your shipping cost is $5`);
}
else if (orderAmount < 50) {
  console.log(`Your shipping cost is $10`);
}
else {
  console.log(`Invalid amount`);
}