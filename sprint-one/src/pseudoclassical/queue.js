// pseudoclassical 

var Queue = function() {
  this.storage = {};
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end ++;
}

Queue.prototype.dequeue = function() {
  if (this.size()){
    var removedEl = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return removedEl; 
  }
}

Queue.prototype.size = function() {
  return this.end - this.start;
}
