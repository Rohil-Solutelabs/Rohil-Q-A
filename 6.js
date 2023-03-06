// Find the missing number from sorted array with O(n) complexity:-

let arr = [1, 2, 3, 4, 6, 7, 9, 10, 11, 14];

function findMissingNumbers(arr) {
  let missing = [];

  for (let i = 0; i < arr.length - 1; i++) {

    if ((arr[i + 1] - arr[i]) !== 1) {
      for (let j = arr[i] + 1; j < arr[i + 1]; j++) {
        missing.push(j);
      }
    }
  }

  return missing;
}

console.log(findMissingNumbers(arr)); 

