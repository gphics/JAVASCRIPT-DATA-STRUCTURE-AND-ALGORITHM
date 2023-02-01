export default function checkArrayItems(Arr) {
  if (!Array.isArray(Arr) || Arr.length === 0)
    return "Array is the only accepted argument and it must not be empty";
  return [...Arr.flat(1)];
}
