//  Remove duplicates from an array and return unique values in O(n) complexity.

const arr = [1, 3, 5, 1, 4, 8, 2, 5, 6, 8, 8, 3, 2, 7];

const dup_arr = (arr) => {
  let map = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      result.push(arr[i]);
    }
    map[arr[i]] = true;
  }
  console.log(result);
};
dup_arr(arr);
