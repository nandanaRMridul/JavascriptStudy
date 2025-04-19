//You’re given an array of student objects. Your task is to:

//Filter out students who scored below 60

//Return a new array of strings in this format:
//👉 "Alice passed with 85"

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 52 },
  { name: "Charlie", score: 77 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 }
];

// Expected Output:
// ["Alice passed with 85", "Charlie passed with 77", "Eve passed with 91"]

let passed = students.filter(student => student.score > 60).map(student => `${student.name} passed with ${student.score}`)


console.log(passed);
