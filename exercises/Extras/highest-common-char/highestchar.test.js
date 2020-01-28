const highestChar = require("./highestchar");

test("highestChar function exists", () => {
  expect(highestChar).toBeDefined();
});

test("highestChar returns l for 'hello' and 'help'", () => {
  expect(highestChar("hello", "help")).toBe("l");
});

test("highestChar returns e for 'eeeh' and 'eee'", () => {
  expect(highestChar("eeeh", "eee")).toBe("e");
});

test("highestChar works with capitals", () => {
  expect(highestChar("hello", "HELLO")).toBe("l");
});

test("highestChar works with none in commin", () => {
  expect(highestChar("hello", "amp")).toBe("");
});
