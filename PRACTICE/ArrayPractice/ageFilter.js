//Filter out users who are below age of 18 and return array of adults

const users = [
  { name: "Sam", age: 17 },
  { name: "Jade", age: 22 },
  { name: "Leo", age: 19 },
  { name: "Max", age: 15 },
];

// Expected Output:
// ["Jade is an adult", "Leo is an adult"]

const adults = users.filter(user => user.age > 18).map(adult => `${adult.name} is an adult`)

console.log(adults);
