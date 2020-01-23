const capitalize = require("./capitalize");

test("capitalize function exists", () => {
  expect(capitalize).toBeDefined();
});

test("capitalizes the first letter of every word in a sentence", () => {
  expect(capitalize("please, capitalize all of these words?")).toBe(
    "Please, Capitalize All Of These Words?"
  );
});

test("capitalizes the first letter", () => {
  expect(capitalize("i love breakfast at pigs and a jelly jar")).toBe(
    "I Love Breakfast At Pigs And A Jelly Jar"
  );
});
