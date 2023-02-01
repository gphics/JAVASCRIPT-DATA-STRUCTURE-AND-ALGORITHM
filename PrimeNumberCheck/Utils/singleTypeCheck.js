export default function checkParameterType(n) {
  // checking if the input is the corrrect input expected and
  //returning the input if it's correct and returning error message when it's not
  if (typeof n === "number" && Number.isInteger(n) && !Number.isNaN(n)) {
    if (n < 2) return `${n} is too small for the operation`;
    return n;
  } else
    return Number.isNaN(n)
      ? `${NaN} is not supported`
      : typeof n === "number" && Number.isInteger(n) === false
      ? `Floating point number not supported`
      : `${typeof n} not supported`;
}
