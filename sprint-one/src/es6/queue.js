class Queue {
  constructor() {
    this.storage = {};
    this.start =  0;
    this.end = 0;
  }

  enqueue(value) {
    this.storage[this.end] = value;
    this.end ++;
  }

  dequeue() {
    if (this.size()) {
      var removedEl = this.storage[this.start];
      delete this.storage[this.start];
      this.start ++;
      return removedEl;
    }
  }

  size() {
    return this.end - this.start;
  }
}
