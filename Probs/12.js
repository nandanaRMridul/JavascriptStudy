//group by city

const people = [
  { name: "Alice", city: "New York" },
  { name: "Bob", city: "Delhi" },
  { name: "Charlie", city: "New York" },
  { name: "Dan", city: "Delhi" },
];

const grouped = people.reduce((acc, curr) => {
  const city = curr.city;
  const name = curr.name;

  if (!acc[city]) {
    acc[city] = [name];
  } else {
    acc[city].push(name);
  }

  return acc;
}, {})

console.log(grouped);