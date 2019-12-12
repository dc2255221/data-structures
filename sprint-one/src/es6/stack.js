class Stack {
  constructor() {
    this.storage = {};
    this.sizeVal = 0;
  }

  push (value) {
    this.storage[this.sizeVal] = value;
    this.sizeVal ++;
  }

  pop() {
    if (this.sizeVal) {
      this.sizeVal --; 
      var poppedEl = this.storage[this.sizeVal];
      delete this.storage[this.sizeVal];
      return poppedEl;
    }
  }

  size () {
    return this.sizeVal;
  }

}