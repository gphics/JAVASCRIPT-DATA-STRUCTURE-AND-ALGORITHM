export default function checkIsPrime(n) {
  //Checking for the accuracy of the input

  if (typeof n !== "number") return n;

  //Result Object
  const resultObj = {
    input: n,
    integerDivider: [],
    floatingPointDivider: [],
    isPrimeNumber: false,
  };

  //Looping through the number
  for (let x = 2; x < n; x++) {
    // Checking if the number can be divided by variable x without remainder
    // if its true the number cant be a prime Number
    if (Number.isInteger(n / x)) {
      //Pushing to the integerDivider array to know the numbers that can be divide the n without remainder
      resultObj.integerDivider.push(x);
    }
    if (!Number.isInteger(n / x)) {
      //Pushing to the floating point array to know the number that cant divide x without remainder
      resultObj.floatingPointDivider.push(x);
    }
  }
  // Changing the boolean state of the isPrimeNumber property of result object base on the length of the integer array
  resultObj.isPrimeNumber =
    resultObj.integerDivider.length === 0 ? true : false;
  return resultObj;
}
