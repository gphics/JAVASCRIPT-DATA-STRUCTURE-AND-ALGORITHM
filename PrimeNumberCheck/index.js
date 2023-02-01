import checkIsPrime from "./Utils/isPrimeCheck.js";
import checkArrayItems from "./Utils/ArrayCheck.js";
import checkParameterType from "./Utils/singleTypeCheck.js";
import primeCheck from "./prime.js";

export default function primeNumberCheckContainer() {
  return {
    checkArrayItems,
    checkIsPrime,
    primeCheck,
    checkParameterType,
  };
}
