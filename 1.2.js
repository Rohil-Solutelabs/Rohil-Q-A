// using object -------------------

const arr = ["hello", "world", "java", "hello", "java"];

// First I create empty object name = frequency
const frequency = {};

for (let freq = 0; freq < arr.length; freq++) {
  let e = arr[freq];

  // update frequency count of an element in frequency object
  if (frequency[e]) {
    frequency[e]++;
  } else {
    frequency[e] = 1;
  }
}

console.log(frequency);
