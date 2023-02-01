function FibonacciSequence(n) {
  if (n <= 1) return;
  let prev = n - 2;
  let cur = n - 1;
  let sum = 0;
  let store = [];
  for (let x = 0; x < n; x++) {
    sum = prev + cur;
    prev = cur;
    cur = sum;
    store.push(sum);
    n--;
    }
    console.log(store);
  return FibonacciSequence(sum);
}

// const res = FibonacciSequence(5);
// console.log(res);
