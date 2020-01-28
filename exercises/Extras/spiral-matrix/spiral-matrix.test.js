const spiralMatrix = require("./spiral-matrix.js");

test("spiralMatrix function exists", () => {
  expect(spiralMatrix).toBeDefined();
});

test("spiralMatrix returns 1x2 matrix", () => {
  expect(spiralMatrix(1, 2)).toEqual([[1, 2]]);
});

test("spiralMatrix returns a 2x1 matrix", () => {
  expect(spiralMatrix(2, 1)).toEqual([[1], [2]]);
});

test("spiralMatrix returns 2x2 matrix", () => {
  expect(spiralMatrix(2, 2)).toEqual([
    [1, 2],
    [4, 3]
  ]);
});

test("spiralMatrix returns 2x3 matrix", () => {
  expect(spiralMatrix(2, 3)).toEqual([
    [1, 2, 3],
    [6, 5, 4]
  ]);
});

test("spiralMatrix returns 3x4 matrix", () => {
  expect(spiralMatrix(3, 4)).toEqual([
    [1, 2, 3, 4],
    [10, 11, 12, 5],
    [9, 8, 7, 6]
  ]);
});
