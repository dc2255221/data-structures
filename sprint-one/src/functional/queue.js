// functional w/ duplicate methods

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var start = 0;
  var end = 0;

  // add to end
  someInstance.enqueue = function(value) {
    storage[end] = value;
    end ++;
  };

  // remove from start
  someInstance.dequeue = function() { 
    if (someInstance.size() > 0) {
      var removedEl = storage[start];
      delete storage[start]
      start ++; 
      return removedEl;
    }

  };

  someInstance.size = function() {
    return end - start;
  };

  return someInstance;
};
