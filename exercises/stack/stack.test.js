const Stack = require("./stack");

describe("Stack", () => {
  test("is a class", () => {
    expect(typeof Stack.prototype.constructor).toBe("function");
  });

  test("can add elements", () => {
    const s = new Stack();
    expect(() => {
      s.add(1);
    }).not.toThrow();
  });

  test("can remove elements", () => {
    const s = new Stack();
    s.add(1);

    expect(s.remove()).toBe(1);
  });

  test("perserves order of elements", () => {
    const s = new Stack();
    s.add(1);
    s.add(2);
    s.add(3);

    expect(s.remove()).toBe(3);
    expect(s.remove()).toBe(2);
    expect(s.remove()).toBe(1);
  });
});
