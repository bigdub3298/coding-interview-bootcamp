const weave = require("./weave");
const Queue = require("./queue");

describe("Queue's peek function", () => {
  test("exists", () => {
    const q = new Queue();
    expect(typeof q.peek).toBe("function");
  });

  test("returns the first value but does not remove it", () => {
    const q = new Queue();
    q.add(1);
    q.add(2);

    expect(q.peek()).toBe(1);
    expect(q.peek()).toBe(1);
    expect(q.remove()).toBe(1);
    expect(q.remove()).toBe(2);
  });
});

describe("Weave function", () => {
  test("exists", () => {
    expect(weave).toBeDefined();
  });

  test("combines two queues", () => {
    const one = new Queue();
    one.add(1);
    one.add(2);
    one.add(3);
    one.add(4);
    const two = new Queue();
    two.add("one");
    two.add("two");
    two.add("three");
    two.add("four");

    const result = weave(one, two);
    expect(result.remove()).toEqual(1);
    expect(result.remove()).toEqual("one");
    expect(result.remove()).toEqual(2);
    expect(result.remove()).toEqual("two");
    expect(result.remove()).toEqual(3);
    expect(result.remove()).toEqual("three");
    expect(result.remove()).toEqual(4);
    expect(result.remove()).toEqual("four");
    expect(result.remove()).toBeUndefined();
  });
});
