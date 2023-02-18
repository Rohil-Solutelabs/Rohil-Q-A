//  Find the nth largest element in a sorted array

const Array1 = [4, 2, 5, 7, 3, 8, 9, 2, 5, 8, 6, 7];
const sortedArray = Array1.sort();

let result = [];

for (let i = 0; i < sortedArray.length; i++) {
  if (sortedArray[i + 1] !== sortedArray[i]) {
    result.push(sortedArray[i]);
  }
}

let n = prompt("Enter number :-");

function findNthLargest(arr, n) {
  const length = arr.length;
  const index = length - n;
  return arr[index];
}

console.log(`${findNthLargest(result, n)}`);
