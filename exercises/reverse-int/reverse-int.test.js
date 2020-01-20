const reverseInt = require("./reverse-int");

test("reverseInt exists", () => {
  expect(reverseInt).toBeDefined();
});

test("reverseInt 0", () => {
  expect(reverseInt(0)).toBe(0);
});

test("reverseInt with positive numbers", () => {
  expect(reverseInt(5)).toBe(5);
  expect(reverseInt(581)).toBe(185);
  expect(reverseInt(400)).toBe(4);
  expect(reverseInt(123)).toBe(321);
  expect(reverseInt(40010)).toBe(1004);
});

test("reverseInt with negative numbers", () => {
  expect(reverseInt(-5)).toBe(-5);
  expect(reverseInt(-581)).toBe(-185);
  expect(reverseInt(-400)).toBe(-4);
  expect(reverseInt(-123)).toBe(-321);
  expect(reverseInt(-40010)).toBe(-1004);
});
