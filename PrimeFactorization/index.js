import primeFactors from "./primeFactor.js";
import getPrimeFactorsFromPrimeNumbers from "./utils/getPrimeFactors.js";
import getPrimeNumbersFromInput from "./utils/getPrimeNumbers.js";


export default function primeFactorContainer() {
  return {
    primeFactors,
    getPrimeFactorsFromPrimeNumbers,
    getPrimeNumbersFromInput,
  };
}
