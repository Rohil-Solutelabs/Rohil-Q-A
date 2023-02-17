//    Group items on the basis of age of given array of object




const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

const groupedByAge = people.reduce((result, person) => {
  const age = person.age;
  //   if there is key in the result object that matches the age of the person.
  //   If the key already exist (condition result[age] is true), appends the current person in same age
  if (result[age]) {
    result[age].push(person);
  } else {
    result[age] = [person];
  }
  return result;
}, {});

console.log(groupedByAge);
