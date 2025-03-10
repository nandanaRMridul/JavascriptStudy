//w.a.p to create a grading system
//90 or above - A
// 80 - 89 -B
//70 - 79 -C
//Below 70 - D

//get user input
marks = 0;

//check what grade the marks corresponds to

if (marks >= 90 && marks <= 100) {
  console.log("A");
}
else if (marks >= 80 && marks <= 89) {
  console.log("B");
}
else if (marks >= 70 && marks <= 79) {
  console.log("C");
}
else if (marks < 70) {
  console.log("D");
}
else {
  console.log("Invaid marks")
}
