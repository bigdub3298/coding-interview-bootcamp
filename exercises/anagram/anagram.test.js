const isAnagrams = require("./anagram");

test("isAnagrams function exists", () => {
  expect(isAnagrams).toBeDefined();
});

test("isAnagrams works with empty strings", () => {
  expect(isAnagrams("", "")).toBeTruthy();
});

test("isAnagrams works with the same words", () => {
  expect(isAnagrams("a", "a")).toBeTruthy();
  expect(isAnagrams("basketball", "basketball")).toBeTruthy();
  expect(isAnagrams("food", "food")).toBeTruthy();
});

test("isAnagrams works with anagrams", () => {
  expect(isAnagrams("rail safety", "fairy tales")).toBeTruthy();
  expect(isAnagrams("dormitory", "dirty room")).toBeTruthy();
});

test("isAnagrams works without anagrams", () => {
  expect(isAnagrams("hello ", "the")).toBeFalsy();
  expect(isAnagrams("hi there", "bye there")).toBeFalsy();
});

test("isAnagrams works with capitalized letters", () => {
  expect(isAnagrams("RAIL! SAFETY", "fairy tales")).toBeTruthy();
  expect(isAnagrams("What it do!", "NOTHING")).toBeFalsy();
});

test("isAnagrams works with numbers", () => {
  expect(isAnagrams("123", "321")).toBeTruthy();
  expect(isAnagrams("he110", "101 he")).toBeTruthy();
  expect(isAnagrams("111", "0")).toBeFalsy();
});
