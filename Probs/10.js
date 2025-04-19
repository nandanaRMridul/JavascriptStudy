//find unique genres

const movies = [
  { title: "Inception", genres: ["Action", "Sci-Fi"] },
  { title: "The Notebook", genres: ["Romance", "Drama"] },
  { title: "Interstellar", genres: ["Sci-Fi", "Drama"] }
];

//["Action", "Sci-Fi", "Romance", "Drama"]

const Uniqgenres = movies.map(m => m.genres).flat(Infinity).filter((g, index, arr) => arr.indexOf(g) === index)

console.log(Uniqgenres);