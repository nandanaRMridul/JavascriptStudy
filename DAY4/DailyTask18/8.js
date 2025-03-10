/* Write a program that checks if a user can withdraw money from an ATM. If the withdrawal amount is greater than the account balance, print "Insufficient balance". Otherwise, subtract the amount and print the new balance.
 */

//Initializing accountBalance, withdrawalAmt variables

accountBalance = 10000;
withdrawalAmt = 8000;

//Checking if withdrawal possible, determining new balance and printing message

if (withdrawalAmt <= 10000 && withdrawalAmt > 0) {
  newBalance = accountBalance - withdrawalAmt;
  console.log(`Withdrawal of ${withdrawalAmt} successful. New balance: ${newBalance}.`);
}
else if(withdrawalAmt > 10000 ) {
  console.log(`Insufficient balance`)
}
else {
  console.log(`Invalid amount`)
}