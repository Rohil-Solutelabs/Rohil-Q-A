// Find the missing number from sorted array with O(n) complexity:-

let arr = [1, 2, 3, 4, 6, 7, 9, 10];

function findEle(arr) {
  let missing = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i + 1] - arr[i] == 1) && !(arr[i + 1] == undefined)) {
      missing.push(arr[i] + 1);
    }
  }
  return missing;
}
console.log(findEle(arr));
