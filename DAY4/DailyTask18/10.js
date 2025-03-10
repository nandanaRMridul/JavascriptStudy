/* w.a.p to rate a movie. rating of 2 or below is bad  rating of 4 or above is good... else, the rating is average */

//Initializing rating variable
rating = 1;

//Checking rating and determining if good, bad or average

if (rating <= 2) {
  console.log(`Movie rating: Bad`);
}
else if (rating > 2 && rating < 4) {
  console.log(`Movie rating: Average`);
}
else if (rating >= 4 && rating <= 5) {
  console.log(`Movie rating: Good`);
}
else {
  console.log(`Invalid rating`);
}