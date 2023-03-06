//    Group items on the basis of age of given array of object

const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

const groupedByAge = people.reduce((result, person) => {
  if (result[person.age]) {
    result[person.age].push(person);
  } else {
    result[person.age] = [person];
  }
  return result;
}, {});

console.log(groupedByAge);
