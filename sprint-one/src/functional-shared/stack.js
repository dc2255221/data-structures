// functional w/ shared methods

var Stack = function() {

  var someInstance = {};
  _.extend(someInstance, stackMethods);

  someInstance.storage = {}
  someInstance.sizeVal = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.sizeVal] = value;
  this.sizeVal ++;
};

stackMethods.pop = function() {
  if (this.sizeVal){
    this.sizeVal--;
    var poppedEl = this.storage[this.sizeVal];
    delete this.storage[this.sizeVal];
    return poppedEl; 
  }
};

stackMethods.size = function() {
  return this.sizeVal;
};
