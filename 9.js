// Print all duplicate elements of an array

const arr = [1, 3, 5, 1, 4, 8, 2, 5, 6, 8, 8, 3, 2, 7];

const dup_arr = (arr) => {
  let map = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]]++;
    }
  }
  for (let key in map) {
    if (map[key] > 1) {
      result.push(key);
    }
  }
  console.log(result);
};

dup_arr(arr);
