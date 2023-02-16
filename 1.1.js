// using Reduce method -------------------

const arr = ["hello", "world", "java", "hello", "java"];
function reduce_func(acc, current) {
  if (typeof acc[current] == "string") {
    acc[current] = 1;
  } else {
    acc[current] = acc[current] + 1;
  }
  return acc;
}

let frequency = arr.reduce(reduce_func, {});

console.log(frequency);
