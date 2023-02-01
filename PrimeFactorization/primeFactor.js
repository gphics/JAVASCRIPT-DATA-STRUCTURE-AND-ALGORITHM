import getPrimeFactorsFromPrimeNumbers from "./utils/getPrimeFactors.js";
import getPrimeNumbersFromInput from "./utils/getPrimeNumbers.js";

export default function primeFactors(n) {
    if(!n) return 'this function must take a parameter'
  //Getting the prime numbers in the input
    const first = getPrimeNumbersFromInput(n);
    if(typeof first === 'string') return first
    // console.log(first);
    const {input, primeNumbers} = first
  ///Getting prime factors from the prime values
  const second = getPrimeFactorsFromPrimeNumbers(input, primeNumbers);
  return second;
}
