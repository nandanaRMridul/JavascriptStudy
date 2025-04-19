//You have a list of purchases made by different users. Each object has a username and the amount they spent.

//Your job:👉 Return an object that tells you how much each user spent in total.

const purchases = [
  { user: "Alice", amount: 50 },
  { user: "Bob", amount: 20 },
  { user: "Alice", amount: 70 },
  { user: "Charlie", amount: 30 },
  { user: "Bob", amount: 100 }
];

/*
Expected Output:
{
  Alice: 120,
  Bob: 120,
  Charlie: 30
}
*/

expenses = {}

const totalExp = purchases.forEach((exp) => {

  if (expenses[exp.user]) {
    expenses[exp.user] += exp.amount;
  }
  else {
    expenses[exp.user] = exp.amount;
  }
})
console.log(expenses);

console.log('------------------------------------------------------------');
const totalExpenses = purchases.reduce((acc, exp) => {
  acc[exp.user] = (acc[exp.user] || 0) + exp.amount;
  return acc;
}, {});

console.log(totalExpenses);
