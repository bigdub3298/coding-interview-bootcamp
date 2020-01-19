const reverseString = require("./reverseString");

test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("reverseString reverses hello ", () => {
  expect(reverseString("hello")).toBe("olleh");
});
