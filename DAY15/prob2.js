/* 
const books = [
    [101, "The Alchemist", "Paulo Coelho", "Fiction", 320, 4.7],
    [102, "To Kill a Mockingbird", "Harper Lee", "Classic", 281, 4.8],
    [103, "1984", "George Orwell", "Dystopian", 328, 4.6],
    [104, "Sapiens", "Yuval Noah Harari", "History", 443, 4.9],
    [105, "The Great Gatsby", "F. Scott Fitzgerald", "Classic", 180, 4.5],
    [106, "Atomic Habits", "James Clear", "Self-Help", 320, 4.9],
    [107, "The Catcher in the Rye", "J.D. Salinger", "Classic", 214, 4.3],
    [108, "Harry Potter", "J.K. Rowling", "Fantasy", 410, 4.9],
    [109, "The Power of Habit", "Charles Duhigg", "Self-Help", 371, 4.6],
    [110, "The Hobbit", "J.R.R. Tolkien", "Fantasy", 310, 4.7]
];

//[Book ID, Title, Author, Genre, Pages, Rating]

1.	Print all book titles.
	2.	Find the total number of books in the collection.
	3.	Print details of books in the “Classic” genre.
	4.	Print books with a rating higher than 4.7.
	5.	Print the details of the book “The Hobbit”.
	6.	Sort books based on page count in descending order.
	7.	Sort books based on ratings in ascending order. */


  const books = [
    [101, "The Alchemist", "Paulo Coelho", "Fiction", 320, 4.7],
    [102, "To Kill a Mockingbird", "Harper Lee", "Classic", 281, 4.8],
    [103, "1984", "George Orwell", "Dystopian", 328, 4.6],
    [104, "Sapiens", "Yuval Noah Harari", "History", 443, 4.9],
    [105, "The Great Gatsby", "F. Scott Fitzgerald", "Classic", 180, 4.5],
    [106, "Atomic Habits", "James Clear", "Self-Help", 320, 4.9],
    [107, "The Catcher in the Rye", "J.D. Salinger", "Classic", 214, 4.3],
    [108, "Harry Potter", "J.K. Rowling", "Fantasy", 410, 4.9],
    [109, "The Power of Habit", "Charles Duhigg", "Self-Help", 371, 4.6],
    [110, "The Hobbit", "J.R.R. Tolkien", "Fantasy", 310, 4.7]
];

//1.	Print all book titles.
console.log("Titles of books:")
for (let eachBook of books) {
  console.log(eachBook[1]);
}
//2.	Find the total number of books in the collection.
console.log("--------------------------");
console.log(`The total number of books: ${books.length}`);
console.log("--------------------------");

//4.	Print books with a rating higher than 4.7.

for (let eachBook of books) {
  if (eachBook[5] > 4.7) {
     console.log(eachBook);
  }
}
console.log("--------------------------");
//5.	Print the details of the book “The Hobbit”.

for (let eachBook of books) {
  if (eachBook[1] == "The Hobbit") {
     console.log(eachBook);
  }
}

console.log("--------------------------");

//6.	Sort books based on page count in descending order.

let sortedArray1 = books.sort((book1, book2) => (book2[4] - book1[4]));
console.log(sortedArray1);

console.log("--------------------------");

//	7.	Sort books based on ratings in ascending order.

let sortedArray2 = books.sort((book1, book2) => (book1[5] - book2[5]));
console.log(sortedArray2);
