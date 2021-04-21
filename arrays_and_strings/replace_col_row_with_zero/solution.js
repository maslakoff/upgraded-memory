export default function replaceWithZero(initialData) {
  const zeroRows = [];
  const zeroCols = [];

  initialData.forEach((row, rowIndex) => {
    row.forEach((item, colIndex) => {
      if (item === 0) {
        zeroRows.push(rowIndex);
        zeroCols.push(colIndex);
      }
    });
  });

  const result = [];
  initialData.forEach((row, rowIndex) => {
    result.push([]);
    row.forEach((item, colIndex) => {
      if (zeroRows.includes(rowIndex) || zeroCols.includes(colIndex)) {
        result[rowIndex][colIndex] = 0;
      } else {
        result[rowIndex][colIndex] = item;
      }
    });
  });

  return result;
}
