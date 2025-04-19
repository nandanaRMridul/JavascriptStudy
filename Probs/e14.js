/* Create a Library class with the following properties:
 books: an array containing book objects. Each book object should have properties like title, author, and available (boolean).
The class should have the following methods:
 addBook(title, author): Adds a new book to the library.
 lendBook(title): Marks a book as not available. 
 returnBook(title): Marks a book as available.*/

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const newBook = {
      title: title,
      author: author,
      available: true,
    };
    this.books.push(newBook);
  }

  lendBook(title) {
    const book = this.books.find((book) => book.title === title);
    if (book) {
      if (book.available) {
        book.available = false;
        console.log("The book has been borrowed successfully");
      } else {
        console.log("The book was already borrowed");
      }
    } else {
      console.log("The book was not found");
    }
  }

  returnBook(title) {
    const book = this.books.find(book => book.title === title)

    if (book) {
      if (!book.available) {
        book.available = true;
        console.log("The book has been returned successfully");
      }
      else {
        console.log("The book was not borrowed");
      }
    }
    else {
      console.log("The book is not found");
    }
  }

}


//create new obj of class Library

const myLibrary = new Library();

myLibrary.addBook("The Alchemist", "Paulo Coelho");
myLibrary.addBook("Wings of fire", "A.P.J Abdul Kalam");
myLibrary.addBook("Sapiens", "Yuval Noah Harari");
myLibrary.addBook("The Da Vinci Code", "Dan Brown");



myLibrary.lendBook("The Da Vinci Code");
myLibrary.lendBook("Sapiens");
myLibrary.lendBook("Sapiens");


myLibrary.returnBook("Sapiens");
myLibrary.lendBook("Sapiens");



 