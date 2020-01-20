const maxChar = require("./maxchar");

test("maxChar funciton exists", () => {
  expect(maxChar).toBeDefined();
});

test("Returns null with empty string", () => {
  expect(maxChar("")).toBeNull();
});

test("Finds the most frequent character", () => {
  expect(maxChar("b")).toBe("b");
  expect(maxChar("aaaabbc")).toBe("a");
  // tiebreaker is char that occurs first
  expect(maxChar("mississippi")).toBe("i");
});

test("Finds most frequent character with capital letters", () => {
  expect(maxChar("F")).toBe("f");
  expect(maxChar("aBbbcA")).toBe("b");
  expect(maxChar("ParalLeL")).toBe("l");
});

test("Finds most frequent character including spaces", () => {
  expect(maxChar(" ")).toBe(" ");
  expect(maxChar("a    b  c")).toBe(" ");
  expect(maxChar("hello there everyone")).toBe("e");
});

test("Finds most frequent character including special characters", () => {
  expect(maxChar("!!$%#@")).toBe("!");
  expect(maxChar("How are you????")).toBe("?");
});

test("Finds most frequent character with numbers", () => {
  expect(maxChar("124091003000")).toBe("0");
  expect(maxChar("hello111321")).toBe("1");
});
