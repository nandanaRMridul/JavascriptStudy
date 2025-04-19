//From a test result array, return the student who scored the highest.

const scores = [
  { name: "Riya", marks: 88 },
  { name: "Jay", marks: 91 },
  { name: "Aman", marks: 85 }
];

// ✅ Output: { name: "Jay", marks: 91 }

console.log(scores.reduce((max, curr) => {
  return curr.marks > max.marks ? curr : max;
}))
