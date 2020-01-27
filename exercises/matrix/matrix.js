// solution 1
const matrix = number => {
  const result = [];
  for (let i = 0; i < number; i++) {
    result.push([]);
  }

  let startRow = 0,
    endRow = number - 1,
    startColumn = 0,
    endColumn = number - 1,
    counter = 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // top row
    for (let i = startColumn; i <= endColumn; i++) {
      result[startRow][i] = counter++;
    }
    startRow++;
    // right column
    for (let i = startRow; i <= endRow; i++) {
      result[i][endColumn] = counter++;
    }
    endColumn--;
    // bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      result[endRow][i] = counter++;
    }
    endRow--;
    // left column
    for (let i = endRow; i >= startRow; i--) {
      result[i][startColumn] = counter++;
    }
    startColumn++;
  }
  return result;
};

module.exports = matrix;
