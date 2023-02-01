import checkIsPrime from "./Utils/isPrimeCheck.js";
import checkParameterType from "./Utils/singleTypeCheck.js";
import checkArrayItems from "./Utils/ArrayCheck.js";



function primeCheck(val) {
  //Checking if the parameter supplied is not an array
  if (!Array.isArray(val)) {
    const checkType = checkParameterType(val)
    return checkIsPrime(checkType);
  }
  // In case if the parameter is an array
  const ArrCheck = checkArrayItems(val);
  //If the array check returns error
  if (typeof ArrCheck === "string") return ArrCheck;
  //
  //Array to store all values of the operations
  const resultArray = [];

  ArrCheck.forEach((elem) => {
    const checkType = checkParameterType(elem)
    resultArray.push(checkIsPrime(checkType));
  });
  return resultArray;
}
export default primeCheck