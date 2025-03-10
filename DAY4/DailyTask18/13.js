/* Given a purchase amount, apply a discount:
100-500 → 10% discount
501-1000 → 20% discount
Above 1000 → 30% discount
Write a program to calculate the amount to be paid after applying the discount
 */

//Initializing purchaseAmt, defining billAmt variables
purchaseAmt = 1200;
billAmt = 0;

//Calculating the amount t be payed after discount
if (purchaseAmt >= 100 && purchaseAmt <= 500) {
  discount = 0.10;
  billAmt = purchaseAmt - (purchaseAmt * 0.10);
  console.log(`The bill amount after a discount of 10%: ${billAmt}`);
}
else if (purchaseAmt > 500 && purchaseAmt <= 1000) {
  discount = 0.20;
  billAmt = purchaseAmt - (purchaseAmt * 0.20);
  console.log(`The bill amount after a discount of 20%: ${billAmt}`);
}
else if (purchaseAmt > 1000) {
  discount = 0.30;
  billAmt = purchaseAmt - (purchaseAmt * 0.30);
  console.log(`The bill amount after a discount of 30%: ${billAmt}`);
}
else {
  console.log(`The bill amount: ${purchaseAmt}`);
}