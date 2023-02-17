// Find the missing number from unsorted array with O(n) complexity:-

let sum = 1;
let c = 2;
let arr = [2, 3, 6, 1, 5, 7, 8];
for (let r = 0; r < arr.length; r++) {
  sum = sum - arr[r] + c;
  c++;
}
console.log(sum);
