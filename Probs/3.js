//From a list of users, return only the ones with a valid email.

const users = [
  { name: "Alice", email: "alice@gmail.com" },
  { name: "Bob", email: "" },
  { name: "Charlie", email: null },
  { name: "Dan", email: "dan@example.com" }
];

// ✅ Output: ["alice@gmail.com", "dan@example.com"]

validUsers = users.filter(user => user.email).map(user => user.email)

console.log(validUsers);