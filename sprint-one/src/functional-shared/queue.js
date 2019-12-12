// functional w/ shared methods

var Queue = function() {

  var someInstance = {};
  _.extend(someInstance, queueMethods);

  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.end = 0;

  return someInstance;
};

var queueMethods = {};

// add to end
queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;  
  this.end ++;
}

// remove from front
queueMethods.dequeue = function() {
  if (this.size() > 0){
    var removedVal = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    // console.log(this.size());
    return removedVal; 
  }
} 

queueMethods.size = function () {
  return this.end - this.start;
}
