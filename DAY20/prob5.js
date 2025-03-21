/* 
const studentScores = [
    { student: "Alice", score: 85 },
    { student: "Bob", score: 78 },
    { student: "Charlie", score: 92 },
    { student: "Alice", score: 90 },
    { student: "Bob", score: 88 },
    { student: "Charlie", score: 95 },
    { student: "David", score: 80 },
    { student: "David", score: 83 },
];
*/


// Print each student's total score
const studentScores = [
  { student: "Alice", score: 85 },
  { student: "Bob", score: 78 },
  { student: "Charlie", score: 92 },
  { student: "Alice", score: 90 },
  { student: "Bob", score: 88 },
  { student: "Charlie", score: 95 },
  { student: "David", score: 80 },
  { student: "David", score: 83 },
];

output = {};

studentScores.forEach((eachDetail) => {
  let name = eachDetail[student]; //name is depreciated key
  let currentScore = eachDetail[score];

  if (student in output) {
    
  }
  else {
    output[name] = currentScore;
  }
})