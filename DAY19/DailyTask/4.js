/* 
Create an object named movie with the following details:

Title: "Inception"
Director: "Christopher Nolan"
Rating: 8.8
1)Access and print the movie's title from the object.

2)The movie has received excellent reviews, so you need to update the rating to 9.0.

3)The movie belongs to a specific category. Add a new property genre and set its value to "Sci-Fi".

4)Print the updated movie object to verify the changes.

5) Check if the rating is greater than or equal to 8.5.

If true, return "Highly Rated Movie"
Otherwise, return "Average Movie"
 */

movie = {
  Title: "Inception",
  Director: "Christopher Nolan",
  Rating: 8.8
}

//1)Access and print the movie's title from the object.
console.log(movie.Title);

//2)The movie has received excellent reviews, so you need to update the rating to 9.0.
movie.Rating = 9.0;

//3)The movie belongs to a specific category. Add a new property genre and set its value to "Sci-Fi".
Object.assign(movie, { Genre: "Sci-Fi" })

//4)Print the updated movie object to verify the changes.
console.log(movie);

//5) Check if the rating is greater than or equal to 8.5.If true, return "Highly Rated Movie", Otherwise, return "Average Movie"

movie.Rating >= 8.5 ? console.log("Highly Rated Movie") : console.log("Average Movie");