var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix to an array
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // justification: the purpose is to add a value to the set
  // specification:
  // input: a string
  // output: a modified array, prototypal style
  // constraints: once a value is added, it should not duplicate the value. when value already exists in set, it should not be added again
  // edge cases: none
  // explanation: if string input is already in array, then dont add it. if it isnt, then add it. we will add it by pushing it
  // pseudocode:
  // if the item is not in the storage array using include method
  if (!this._storage.includes(item)) {
    // then add it
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  // pseudocode:
  // return whether storage contains item
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  // pseudocode:
  // find index of item using indexOf method
  let index = this._storage.indexOf(item);
  // if index is not -1
  if (index !== -1) {
    // splice item at that index
    this._storage.splice(index, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
