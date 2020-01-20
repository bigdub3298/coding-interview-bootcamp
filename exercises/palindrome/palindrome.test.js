const isPalindrome = require("./palindrome");

test("isPalindrome function exists", () => {
  expect(isPalindrome).toBeDefined();
});

test("isPalndrome of empty string", () => {
  expect(isPalindrome("")).toBeFalsy();
});

test("isPalindrome level", () => {
  expect(isPalindrome("level")).toBeTruthy();
});

test("isPalindrome with special characters !asa", () => {
  expect(isPalindrome("!asa")).toBeFalsy();
});

test("isPalindrome acccca", () => {
  expect(isPalindrome("acccca")).toBeTruthy();
});

test("isPalindrome whack", () => {
  expect(isPalindrome("whack")).toBeFalsy();
});

test("isPalindrome Level (with capitals)", () => {
  expect(isPalindrome("Level")).toBeTruthy();
});
