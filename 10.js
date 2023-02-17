//  Collect books from array of objects and return collection of books as an array

const friends = [
  {
    name: "Anna",
    books: ["Bible", "Geeta", "Harry Potter"],
    age: 20,
  },
  {
    name: "Bob",
    books: ["War and Peace", "Geeta", "Quran"],
    age: 22,
  },
  {
    name: "Alice",
    books: ["The Monk", "Pride and Prejudice", "Good Morning"],
    age: 21,
  },
];

function collectBooks(arr) {
  let booksArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].books.length; j++) {
      booksArr.push(arr[i].books[j]);
    }
  }
  return booksArr;
}

console.log(collectBooks(friends));
