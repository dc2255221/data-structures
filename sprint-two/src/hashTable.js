
//PSEUDOCLASSICAL STYLE

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //set counter for number of inputs
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //input: key as a string, and value as any type of data
  //output: Will be a hashed key and value pair inserted into a bucket within the array
  //constraints: Make sure code can handle hash key collisions and keys are within the range of the array length
  //edge cases: - Advanced - If input counter is larger than 75% of the length of the array, then double the length of the array. If less than 25% of the length of the array, then halve the length of the array.

  //Justification: To input a key value pair into the array.
  //Explanation: We will use the hash function to hash the key, and then use the key to insert the key value pair into the array and their proper buckets.

  //Pseudocode:
  // console.log(storage);
  // creating a variable bucket and setting it to the bucket at index
  var bucket = this._storage.get(index);
  //if bucket is undefined
  if (bucket === undefined) {
    // set bucket to empty arr
    bucket = [];
    // push the key value pair to bucket
    bucket.push([k, v]);
    // // set value to bucket
    // let value = bucket;
    // add the bucket to the storage array
    this._storage.set(index, bucket);
  }

  //if key exists in the bucket
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      //then we update value to new value
      bucket[i][1] = v;
    } else {
      // if key does not exist
      bucket.push([k, v]);
    }
  }

  this._storage.set(index, bucket);
};
//else add key value to bucket


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //input: key
  //output: value at key
  //constraints: nada
  //edge cases: nada
  //justification: get the value found at a given key
  //explanation: Every key value pair is stored in a tuple at a given index in a bucket. In order for us to retrieve the value, we would have to iterate to that specific index in the bucket and check each element in the bucket and see if the 0 index is the the given key. Then return the value.

  //declare bucket
  var bucket = this._storage.get(index);
  //Iterate over the bucket
  for (var i = 0; i < bucket.length; i++) {
    //If the zero index of the element is equal to k
    if (bucket[i][0] === k) {
      //return the value at the 1st index
      return bucket[i][1];
    }
  }
  //return undefined
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // input: key
  // ouput: modified storage array
  // constraints: if key does not exist then return undefined
  // edge cases: none
  // justification: remove the key value pair at the given key
  // explanataion: iterate over the bucket and delete the tuple that contains the given key
  // pseudocode
  // declare the bucket
  var bucket = this._storage.get(index);
  // iterate over the bucket
  for (var i = 0; i < bucket.length; i++) {
    // if the zero index of the element is equal to k
    if (bucket[i][0] === k) {
    // then delete the tuple and then update storage with set method
      bucket.splice(i, 1);
    }
  }
  this._storage.set(index, bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */





