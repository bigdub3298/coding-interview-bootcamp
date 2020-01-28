const fib = require("./fib");

test("fib function exists", () => {
  expect(fib).toBeDefined();
});

test("calculates fib number for 1", () => {
  expect(fib(1)).toBe(1);
});

test("calcualtes fib value for 2", () => {
  expect(fib(2)).toBe(1);
});

test("caluculates fib for 4", () => {
  expect(fib(4)).toBe(5);
});

test("calculates fib value for 25", () => {
  expect(fib(25)).toBe(75025);
});
