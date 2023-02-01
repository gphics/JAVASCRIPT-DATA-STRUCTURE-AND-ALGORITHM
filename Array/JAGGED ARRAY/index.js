function Jagged(row, column) {
  if (row < 1 || column < 1) return "0 cannot be operated on";
  const parent = [];
  for (let x = 0; x < row; x++) {
    const newArr = Array.from(row);
    for (let i = 0; i < column; i++) {
      newArr[i] = i;
    }
    parent.push(newArr);
  }
  return parent;
}

const res = Jagged(2, 0.1);
console.log(res);
