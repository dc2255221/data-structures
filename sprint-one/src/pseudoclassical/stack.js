// pseudoclassical

var Stack = function() {
  this.storage = {};
  this.sizeVal = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.sizeVal] = value;
  this.sizeVal ++; 
} 

Stack.prototype.pop = function() {
  if (this.sizeVal) {
    this.sizeVal --;
    var poppedEl = this.storage[this.sizeVal];
    delete this.storage[this.sizeVal];
    return poppedEl;
  }
}

Stack.prototype.size = function() {
  return this.sizeVal;
}


