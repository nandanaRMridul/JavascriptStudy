const movies = [
  [201, "Inception", "Christopher Nolan", "Sci-Fi", 8.8, 2010],
  [202, "The Godfather", "Francis Ford Coppola", "Crime", 9.2, 1972],
  [203, "Interstellar", "Christopher Nolan", "Sci-Fi", 8.6, 2014],
  [204, "Pulp Fiction", "Quentin Tarantino", "Crime", 8.9, 1994],
  [205, "Parasite", "Bong Joon-ho", "Thriller", 8.6, 2019],
  [206, "The Dark Knight", "Christopher Nolan", "Action", 9.0, 2008],
];

// 1. Print all movie titles.
console.log("Movie Titles: " + movies.map(movie => movie[1]).join(', '));

console.log("----------------------------------------------------------------------------------------------");
// 2. Find all movies directed by Christopher Nolan.
console.log(movies.filter(movie => {
  if (movie[2] == "Christopher Nolan") {
    return movie;
  }
}));
// 3. Print movies with rating above 8.8.
// 4. Print the highest-rated movie.
// 5. Sort movies by rating in descending order.
// 6. Print movies released before 2000.
// 7. Group movies by genre.
