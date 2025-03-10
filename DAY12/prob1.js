//expense = [200, 100, 300, 500, 600, 700]
//1)find least expense
//2)highest expense
//3)total expense

expense = [200, 100, 300, 500, 600, 700];
let leastExpense = expense[0];
let highestExpense = expense[expense.length - 1];
sum = 0;

/* for (i = 0; i <= expense.length - 1; i++){
  if (least > expense[i]) {
    least = expense[i];
  }
  if (highest < expense[i]) {
    highest = expense[i];
  }
} */


for (exp of expense){
  if(exp < leastExpense)
  {
  exp =leastExpense;
  }
}
console.log(leastExpense);

for (exp of expense){
  if(exp > highestExpense)
  {
  exp =highestExpense;
  }
}
console.log(highestExpense);

for (num of expense) {
  sum += num;
}

console.log(sum);
