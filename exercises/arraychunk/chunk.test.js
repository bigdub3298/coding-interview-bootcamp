const chunk = require("./chunk");

test("chunk function exists", () => {
  expect(chunk).toBeDefined();
});

test("chunk returns empty array with empty input array", () => {
  expect(chunk([], 2)).toEqual([]);
});

test("chunk works when array is evenly divisible by chunk size", () => {
  expect(chunk([1, 2], 1)).toEqual([[1], [2]]);
  expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([
    [1, 2],
    [3, 4],
    [5, 6]
  ]);
  expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6]
  ]);
});

test("chunk works when array is not divisble by chunk size", () => {
  expect(chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  expect(chunk([1, 2, 3, 4, 5, 6, 7], 4)).toEqual([
    [1, 2, 3, 4],
    [5, 6, 7]
  ]);
});

test("chunk works with chunk size larger than array", () => {
  expect(chunk([1], 2)).toEqual([[1]]);
  expect(chunk([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]]);
  expect(chunk([1, 2, 3, 4, 5, 6, 7], 10)).toEqual([[1, 2, 3, 4, 5, 6, 7]]);
});
