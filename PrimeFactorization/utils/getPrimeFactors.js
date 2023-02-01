export default function getPrimeFactorsFromPrimeNumbers(n, Arr) {
  if (!Array.isArray(Arr)) return Arr;
  const store = [];
  const ans = Arr.forEach((elem, _, arr) => {
    for (let a = 0; a < arr.length; a++) {
      if (arr[a] * elem === n) {
        const obj = {
          first: arr[a],
          second: elem,
        };
        store.push(obj);
      }
    }
  });
  return store.length !== 0 ? store : `${n} has no prime factors`;
}
