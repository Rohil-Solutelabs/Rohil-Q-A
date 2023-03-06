//  Find the nth largest element in a sorted array

const Array = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 8, 9];

let result = [];

for (let i = 0; i < Array.length; i++) {
  if (Array[i + 1] !== Array[i]) {
    result.push(Array[i]);
  }
}

function findNthLargest(arr, n) {
  const length = arr.length;
  const index = length - n;
  return arr[index];
}

console.log(`${findNthLargest(result, 3)}`);
