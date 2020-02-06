class Queue {
  constructor() {
    this.data = [];
  }

  add(item) {
    // this.data.push(item);
    this.data.unshift(item);
  }

  remove() {
    // return this.data.shift();
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Queue;
