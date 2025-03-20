/* 
Create an object named book with the following details:
	•	Title: “The Alchemist”
	•	Author: “Paulo Coelho”
	•	Pages: 208
	•	Access and print the book’s author.
	•	Update the number of pages to 210.
	•	Add a new property genre with the value “Fiction”.
	•	Print the updated object.
 */

book = {
  Title: "The Alchemist",
	Author: "Paulo Coelho",
	Pages: 208
}

//Access and print the book’s author.
console.log(book.Author);

//Update the number of pages to 210.
book.Pages = 210;

//Add a new property genre with the value “Fiction”.
Object.assign(book, {Genre: "Fiction"})

//Print the updated object
console.log(book);