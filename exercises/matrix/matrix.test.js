const matrix = require("./matrix");

test("matrix function exists", () => {
  expect(matrix).toBeDefined();
});

test("matrix with number = 2 (2x2)", () => {
  expect(matrix(2)).toEqual([
    [1, 2],
    [4, 3]
  ]);
});

test("matrix with number = 3 (3x3)", () => {
  expect(matrix(3)).toEqual([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
  ]);
});

test("matrix with number = 4 (4x4)", () => {
  expect(matrix(4)).toEqual([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
  ]);
});
