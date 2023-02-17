// Find the pairs of array element for which sum is equal to given target value (Two Sum Problem):-

function findTwoSum(arr, target) {
  const result = [];

  // first loop is for i index and second is for i+1 index
  // then checks (i)+(i+1) = target push in result array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

const arr = [1, 2, 3, 4, 6, 7, 8, 9];
const pairs = findTwoSum(arr, 9);
console.log(pairs);
