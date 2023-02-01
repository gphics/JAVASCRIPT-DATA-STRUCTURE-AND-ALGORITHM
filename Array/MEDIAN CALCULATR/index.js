function getMedian(arr) {
  if (!Array.isArray(arr)) return "Only array is needed";
  const arrLength = arr.length;
  let midNumIndex = arrLength / 2;

  let median;
  if (!Number.isInteger(midNumIndex)) {
      midNumIndex = Math.trunc(midNumIndex)
      median = arr[midNumIndex]
  } else {

      median = (arr[midNumIndex] + arr[midNumIndex - 1]) / 2
    midNumIndex = [midNumIndex, midNumIndex - 1];
  }

  return { arrLength, median, midNumIndex };
}

const arr = [1,1,2, 3, 4, 5, 6, 3, 5, 6,45,234,4];
console.log(getMedian(arr));
