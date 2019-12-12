// functional w/ duplicate methods

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {}; // private variable

  var size = 0;

  someInstance.push = function(value) {
    storage[size] = value;
    size ++;
  };

  someInstance.pop = function() {
    if (size) {
      size --;
      var poppedEl = storage[size];
      delete storage[size];
      return poppedEl;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
