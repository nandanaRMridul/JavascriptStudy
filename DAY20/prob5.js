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
  let name = eachDetail.student; //name is depreciated keyword so use let
  let currentScore = eachDetail.score;

  if (name in output) {//object in operator
    if (currentScore > output[name]) { //if current score > score stored in output rn (name : score), output[name] = score
      output[name] = currentScore;
    }
  }
  else {
    output[name] = currentScore;
  }
})

console.log(output);