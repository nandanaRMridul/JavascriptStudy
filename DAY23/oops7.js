class bank{
  accno = 1001
  accName = "shvkjjli"
  #accBalance = 50000

  showBalance() {
    console.log(this.#accBalance);
  }
}
  
const Bank = new bank();

Bank.showBalance();
console.log(Bank.accno);
console.log(Bank.accBalance);


