const pyramid = require("./pyramid");

beforeEach(() => {
  jest.spyOn(console, "log");
});

afterEach(() => {
  console.log.mockRestore();
});

test("pyramid function exists", () => {
  expect(pyramid).toBeDefined();
});

test("pyramid called with number = 1", () => {
  pyramid(1);
  expect(console.log.mock.calls[0][0]).toBe("#");
  expect(console.log.mock.calls.length).toBe(1);
});

test("pyramid called with number = 3", () => {
  pyramid(3);
  expect(console.log.mock.calls[0][0]).toBe("  #  ");
  expect(console.log.mock.calls[1][0]).toBe(" ### ");
  expect(console.log.mock.calls[2][0]).toBe("#####");
  expect(console.log.mock.calls.length).toBe(3);
});

test(" pryamid called with number = 4", () => {
  pyramid(4);
  expect(console.log.mock.calls[0][0]).toEqual("   #   ");
  expect(console.log.mock.calls[1][0]).toEqual("  ###  ");
  expect(console.log.mock.calls[2][0]).toEqual(" ##### ");
  expect(console.log.mock.calls[3][0]).toEqual("#######");
  expect(console.log.mock.calls.length).toEqual(4);
});
