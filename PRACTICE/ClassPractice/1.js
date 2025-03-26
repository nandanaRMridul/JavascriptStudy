//Create a Library class to manage books in a library. The class should include the following functionalities:
//1.	Store book details – Each book has a book ID, title, author, and availability status (available or borrowed).
//2.	Validate Book ID – Implement a method to check whether a book ID exists in the library.
//3.	Borrow a Book – A user should be able to borrow a book if it is available. If not, display a message stating that the book is already borrowed.
//4.	Return a Book – A user should be able to return a borrowed book, making it available again.
//5.	Check Availability – Given a book ID, display whether the book is available or borrowed.

class Library {
  bookDetails = {
    101: {
      bookID: 101,
      title: "The Alchemist",
      author: "Paulo Coelho",
      available: true,
    },
    102: {
      bookID: 102,
      title: "Atomic Habits",
      author: "James Clear",
      available: false,
    },
    103: {
      bookID: 103,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      available: true,
    },
  };
  //2.	Validate Book ID – Implement a method to check whether a book ID exists in the library.
  validateBookID(bookID) {
    return this.bookDetails.hasOwnProperty(bookID);
  }
  //3.	Borrow a Book – A user should be able to borrow a book if it is available. If not, display a message stating that the book is already borrowed.
  borrowABook(bookID) {
    let book = this.bookDetails[bookID];

    if (this.validateBookID(bookID)) {
      return book.available
        ? "Book has been borrowed"
        : "Book is already borrowed";
    } else {
      return "Invalid book ID";
    }
  }

  //4.	Return a Book – A user should be able to return a borrowed book, making it available again.
  returnABook(bookID) {
    let book = this.bookDetails[bookID];

    if (this.validateBookID(bookID)) {
      if (!book.available) {
        return "Book has been returned";
        book.available = true;
      } else {
        return "Book is already available";
      }
    } else {
      return "Invalid book ID";
    }
  }
  //5.	Check Availability – Given a book ID, display whether the book is available or borrowed.
  checkAvailablility(bookID) {
    let book = this.bookDetails[bookID];

    if (this.validateBookID(bookID)) {
      if (book.available) {
        return "Book is available";
      } else {
        return "Book has been borrowed";
      }
    } else {
      return "Invalid book ID";
    }
  }
}

book1 = new Library();

console.log(book1.validateBookID(103));
console.log(book1.borrowABook(103));
console.log(book1.returnABook(103));
console.log(book1.checkAvailablility(103));