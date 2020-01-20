const reverseString = require("./reverseString");

test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("reverseString with empty string", () => {
  expect(reverseString("")).toBe("");
});

test("reverseString with hello ", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverseString with accde !", () => {
  expect(reverseString("accde !")).toBe("! edcca");
});

test("reverseString with WesleY", () => {
  expect(reverseString("WesleY")).toBe("YelseW");
});
