// Find the missing number from unsorted array with O(n) complexity:-

let arr = [3, 4, 6, 1, 2, 5, 8];

function findEle(arr) {
  let sum = 1;
  let c = 2;
  for (let r = 0; r < arr.length; r++) {
    sum = sum - arr[r] + c;
    c++;
  }

  console.log(sum);
}
findEle(arr);