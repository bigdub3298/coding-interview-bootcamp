const steps = require("./steps");

beforeEach(() => {
  jest.spyOn(console, "log");
});

afterEach(() => {
  console.log.mockRestore();
});

test("steps function exists", () => {
  expect(steps).toBeDefined();
});

test("steps called with number = 1", () => {
  steps(1);
  expect(console.log.mock.calls[0][0]).toBe("#");
  expect(console.log.mock.calls.length).toBe(1);
});

test("steps called with number = 3", () => {
  steps(3);
  expect(console.log.mock.calls[0][0]).toBe("#  ");
  expect(console.log.mock.calls[1][0]).toBe("## ");
  expect(console.log.mock.calls[2][0]).toBe("###");
  expect(console.log.mock.calls.length).toBe(3);
});
