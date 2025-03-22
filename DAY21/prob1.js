
const accounts = [
    {
        acno: 1000,
        ac_type: 'saving',
        balance: 45000,
        transaction: [
            { to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay' },
            { to: 1002, amount: 2000, msg: 'emi', mode: 'neft' },
            { to: 1003, amount: 1000, msg: 'recharge', mode: 'phonePe' }
        ]
    },
    {
        acno: 1001,
        ac_type: 'current',
        balance: 30000,
        transaction: [
            { to: 1000, amount: 4000, msg: 'rent', mode: 'upi' },
            { to: 1004, amount: 3500, msg: 'shopping', mode: 'net banking' }
        ]
    },
    {
        acno: 1002,
        ac_type: 'saving',
        balance: 55000,
        transaction: [
            { to: 1003, amount: 5000, msg: 'loan', mode: 'rtgs' },
            { to: 1005, amount: 1500, msg: 'grocery', mode: 'upi' }
        ]
    },
    {
        acno: 1003,
        ac_type: 'saving',
        balance: 20000,
        transaction: [
            { to: 1002, amount: 2500, msg: 'internet bill', mode: 'neft' },
            { to: 1004, amount: 3200, msg: 'electricity', mode: 'gpay' }
        ]
    },
    {
        acno: 1004,
        ac_type: 'current',
        balance: 60000,
        transaction: [
            { to: 1005, amount: 7000, msg: 'car loan', mode: 'phonePe' },
            { to: 1001, amount: 2200, msg: 'fuel', mode: 'upi' }
        ]
    }
];

// total number of accounts 
console.log(accounts.length);
console.log("-----------------------------------------------------------------------");


// print account number whose ac_type is savings
accounts.forEach((eachDetail) => {
  if (eachDetail.ac_type == "saving") {
    console.log(eachDetail.acno);
  }
})
console.log(
  "-----------------------------------------------------------------------"
);

// print the balance of account number 1000
accounts.forEach((eachDetail) => {
  eachDetail.acno == 1000 && console.log(eachDetail.balance)
})

console.log(
  "-----------------------------------------------------------------------"
);
// print all phonePay transaction
accounts.forEach((eachDetail) => {
  transaction = eachDetail.transaction;
  transaction.forEach((eachTr) => {
    if ((eachTr.mode).toLowerCase() == 'phonepe') {
      console.log(eachTr)
    }
  })
})
console.log(
  "-----------------------------------------------------------------------"
);


/*  console.log(accounts.map((eachDetail) => { transaction = eachDetail.transaction }).flat(Infinity).filter((el) => el.mode == 'phonePe'));

console.log(
  "-----------------------------------------------------------------------"
); */
 
/* console.log(
  accounts
    .map((eachDetail) => {
      transaction = eachDetail.transaction;
    })
    .flat(Infinity)
    .filter((el) => el.amount >3000)
);
 */

/*  let transaction1002 =  accounts.map((eachDetail) => {transaction = eachDetail.transaction;}).flat(Infinity).filter((el=> el.to == 1002))
console.log((transaction1002));

console.log(
  "-----------------------------------------------------------------------"
); */


// print all transactions > 3000


// print credit transaction of account 1002(CREDITED TO)

// print total credited amount to 1002
console.log(
  accounts
    .map((eachDetail) => {
      transaction = eachDetail.transaction
    })
    .flat(Infinity)
    
);
// print debit transaction of 1002
let debitVar = accounts.find(
  (eachElement) => eachElement.acno == 1002
).transaction;
console.log(debitVar);
// transaction history of 1002  

console.log({...transaction1002,...debitVar})

// current balance of 1002 (balace +credit amount)
let balance = accounts.find((eachEl) => eachEl.acno == 1002).balance;

console.log(balance+totalCred);
// Account with highest balance

let val = accounts.reduce((a, b) => a > b ? a : b)
console.log(val);
