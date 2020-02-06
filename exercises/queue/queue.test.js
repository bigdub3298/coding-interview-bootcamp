const Queue = require("./queue");

describe("Queue", () => {
  test("is a class", () => {
    expect(typeof Queue.prototype.constructor).toBe("function");
  });

  test("can add element", () => {
    const q = new Queue();

    expect(() => {
      q.add(1);
    }).not.toThrow();
  });

  test("can remove elemnt", () => {
    const q = new Queue();
    q.add(1);

    expect(q.remove()).toBe(1);
  });

  test("preserves order of elements", () => {
    const q = new Queue();
    q.add(1);
    q.add(2);
    q.add(3);

    expect(q.remove()).toBe(1);
    expect(q.remove()).toBe(2);
    expect(q.remove()).toBe(3);
  });
});
