const arr = [3, 5, 1, 4, 2, 5, 6, 8, 8, 3, 2, 7];

const dup_arr = (arr) => {
  let sortedArray = arr.sort();
  let result = [];

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i + 1] === sortedArray[i]) {
      // if index 1 and index 0 is same then we have to push this element in result array
      result.push(sortedArray[i]);
    }
  }
  return result;
};

console.log(`${dup_arr(arr)}`);
