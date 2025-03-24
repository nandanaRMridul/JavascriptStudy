const accounts = [
  {
    acno: 1000,
    ac_type: "saving",
    balance: 45000,
    transaction: [
      { to: 1001, amount: 5000, msg: "ebill", mode: "gpay" },
      { to: 1002, amount: 2000, msg: "emi", mode: "neft" },
      { to: 1003, amount: 1000, msg: "recharge", mode: "phonePe" },
    ],
  },
  {
    acno: 1001,
    ac_type: "current",
    balance: 30000,
    transaction: [
      { to: 1000, amount: 4000, msg: "rent", mode: "upi" },
      { to: 1004, amount: 3500, msg: "shopping", mode: "net banking" },
    ],
  },
  {
    acno: 1002,
    ac_type: "saving",
    balance: 55000,
    transaction: [
      { to: 1003, amount: 5000, msg: "loan", mode: "rtgs" },
      { to: 1005, amount: 1500, msg: "grocery", mode: "upi" },
    ],
  },
  {
    acno: 1003,
    ac_type: "saving",
    balance: 20000,
    transaction: [
      { to: 1002, amount: 2500, msg: "internet bill", mode: "neft" },
      { to: 1004, amount: 3200, msg: "electricity", mode: "gpay" },
    ],
  },
  {
    acno: 1004,
    ac_type: "current",
    balance: 60000,
    transaction: [
      { to: 1005, amount: 7000, msg: "car loan", mode: "phonePe" },
      { to: 1001, amount: 2200, msg: "fuel", mode: "upi" },
    ],
  },
];

// total number of accounts
console.log(accounts.length);
console.log(
  "-----------------------------------------------------------------------"
);

// print account number whose ac_type is savings
console.log(accounts.filter((eachDetail) => eachDetail.ac_type == "saving"))

console.log("-------------------------------------------");

// print the balance of account number 1000
console.log(accounts.find((eachDetail) => eachDetail.acno == 1000).balance);
console.log("-------------------------------------------");

// print all phonePay transaction
console.log(
  accounts
    .map((eachDetail) => eachDetail.transaction)
    .flat(Infinity)
    .filter((eachDetail) => eachDetail.mode == "phonePe")
);

console.log(
  "-----------------------------------------------------------------------"
);
// print all transactions > 3000

console.log(
  accounts
    .map((eachDetail) => eachDetail.transaction)
    .flat(Infinity)
    .filter((eachDetail) => eachDetail.amount > 3000)
);
console.log(
  "-----------------------------------------------------------------------"
);
// print credit transaction of account 1002(CREDITED TO)

transaction1002 = accounts
  .map((eachDetail) => eachDetail.transaction)
  .flat(Infinity)
  .filter((eachTr) => eachTr.to == 1002); 
console.log(transaction1002);
console.log(
  "-----------------------------------------------------------------------"
);

// print total credited amount to 1002
totalCred = transaction1002
  .map((eachDetail) => eachDetail.amount)
  .reduce((a1, a2) => a1 + a2);
console.log(totalCred);
console.log(
  "-----------------------------------------------------------------------"
);

// print debit transaction of 1002
let debitVar = accounts.find(
  (eachDetail) => eachDetail.acno == 1002
).transaction;
console.log(debitVar);
console.log(
  "-----------------------------------------------------------------------"
);

// transaction history of 1002
console.log(...transaction1002, ...debitVar);
console.log(
  "-----------------------------------------------------------------------"
);

// current balance of 1002 (balace +credit amount)
let balance = accounts.find((eachDetail) => eachDetail.acno == 1002).balance;

console.log(balance + totalCred);
console.log(
  "-----------------------------------------------------------------------"
);

// Account with highest balance
let highestBalance = accounts.reduce((a1, a2) => a1 > a2 ? a1 : a2)
console.log(highestBalance);
console.log(
  "-----------------------------------------------------------------------"
);