//group students by grade

const students = [
  { name: "A", grade: "A" },
  { name: "B", grade: "B" },
  { name: "C", grade: "A" },
  { name: "D", grade: "C" }
];

/*  ✅ Output:
{
  A: ["A", "C"],
  B: ["B"],
  C: ["D"]
} */

const group = students.reduce((acc, curr) => {
  const grade = curr.grade;
  const name = curr.name;

  if (!acc[grade]) {
    acc[grade] = [name];
  } else {
    acc[grade].push(name);
  }
  return acc;
}, {})


console.log(group);