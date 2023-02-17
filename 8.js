//  Remove duplicates from an array and return unique values in O(n) complexity.

const arr = [1, 3, 5, 1, 4, 8, 2, 5, 6, 8, 8, 3, 2, 7];

const dup_arr = (arr) => {
  let sortedArray = arr.sort();
  console.log("Sorted Array", sortedArray);

  let result = [];

  for (let i = 0; i < sortedArray.length; i++) {
    if (
      sortedArray[i + 1] == sortedArray[i] ||
      sortedArray[i - 1] == sortedArray[i]
    ) {
    } else {
      result.push(sortedArray[i]);
    }
  }
  console.log(result);
};
dup_arr(arr);
