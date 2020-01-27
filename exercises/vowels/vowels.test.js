const vowels = require("./vowels");

test("vowels function exists", () => {
  expect(vowels).toBeDefined();
});

test('return number of vowels in "abcdefghijklmnopqrstuvwxyz"', () => {
  expect(vowels("abcdefghijklmnopqrstuvwxyz")).toBe(5);
});

test('return number of vowels in "Hi there!"', () => {
  expect(vowels("Hi there!")).toBe(3);
});

test("return number of vowels with capitalized", () => {
  expect(vowels("AEIOU")).toBe(5);
});

test("return 0 when no vowels present", () => {
  expect(vowels("bjgjjddkfkjlkjgs")).toBe(0);
});
