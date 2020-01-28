const matrix = (rows, cols) => {
  const result = [];
  for (let i = 0; i < rows; i++) {
    result.push([]);
  }

  let endRow = rows - 1,
    startRow = 0,
    endColumn = cols - 1,
    startColumn = 0,
    counter = 1;

  while (startRow <= endRow && startColumn <= endColumn) {
    for (let i = startColumn; i <= endColumn; i++) {
      result[startRow][i] = counter++;
    }
    startRow++;
    // necessary becaust could be full but columns still ahve diff if cols > rows
    if (startRow > endRow) {
      break;
    }

    for (let i = startRow; i <= endRow; i++) {
      result[i][endColumn] = counter++;
    }
    endColumn--;
    for (let i = endColumn; i >= startColumn; i--) {
      result[endRow][i] = counter++;
    }
    endRow--;
    // necessary because could be full but rows still have diff if rows > cols
    if (startColumn > endColumn) {
      break;
    }
    for (let i = endRow; i >= startRow; i--) {
      result[i][startColumn] = counter++;
    }
    startColumn++;
  }
  console.log(result);
};

matrix(5, 5);
