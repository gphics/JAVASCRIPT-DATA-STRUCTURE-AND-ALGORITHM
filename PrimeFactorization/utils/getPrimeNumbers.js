import primeNumberCheckContainer from "../../PrimeNumberCheck/index.js";

const { primeCheck, checkParameterType } = primeNumberCheckContainer();

export default function getPrimeNumbersFromInput(n) {
  const checkedType = checkParameterType(n);
  if(typeof checkedType === 'string') return checkedType
  const primeArray = [];
  for (let x = 2; x < checkedType; x++) {
    const checkedPrime = primeCheck(x);
    primeArray.push(checkedPrime);
  }
  const isPrimeArray = primeArray
    .filter((elem) => elem.isPrimeNumber)
    .map((elem) => elem.input);
  const result = {
    primeNumbers:
      isPrimeArray.length !== 0
        ? isPrimeArray
        : `${n} does not have a prime number`,
    input: checkedType,
  };
  return result;
}
