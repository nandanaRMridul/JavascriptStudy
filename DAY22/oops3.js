class Bank {
  accountDetails = {
    1000: {
      accno: 1000,
      userName: "userOne",
      password: "password1",
      balance: 5000,
    },
    1001: {
      accno: 1001,
      userName: "userTwo",
      password: "password2",
      balance: 7000,
    },
    1002: {
      accno: 1002,
      userName: "userThree",
      password: "password3",
      balance: 8000,
    },
    1003: {
      accno: 1003,
      userName: "userFour",
      password: "password4",
      balance: 6000,
    },
    1004: {
      accno: 1004,
      userName: "userFive",
      password: "password5",
      balance: 9000,
    },
  };

  // Validate account no : (check account no is there)
  validateAccno(userInput) {
 /*   this.accountDetails.hasOwnProperty(userInput) ? console.log("Account validated") : console.log("Invalid account number");;
   */
    return this.accountDetails.hasOwnProperty(userInput);
  }
  // authenticate account (username & password)
  authenticateAccount(accno, username, password) {
    if (this.validateAccno(accno)) {
      let account = this.accountDetails[accno];
      if (account.username == username && account.password == password) {
        return "Account authenticated";
      }
      else {
        return "Account invalid";
      }
      
    } else {
      return "User with this account number is invalid"
    }
  }

  // balace enquiry (accno)
  balanceEnquiry(accno) {
    if (this.validateAccno(accno)) {
      let account = this.accountDetails[accno];
      return account.balance;
    } else {
      return "User with this account number is invalid";
    }
  }
}

const account1 = new Bank();

console.log(account1.validateAccno(1000));

console.log(account1.authenticateAccount(1000, "userOne", "password1"));

console.log(account1.balanceEnquiry(1000))


