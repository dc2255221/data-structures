var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // extend methods from treeMethods to instance
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix to an empty array

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // Specification:
  // Inputs: any value
  // Output: creates a node
  // Constraints: none
  // Edge Cases: none

  // Justification: takes a value that is inputted and sets that value as the target of a node and adds that as a child of the tree
  // Explanation: We are taking the value and creating a child node from that value and adds that as a child node of the tree

  // declare a variable child and set that as a new instance of Tree
  var child = Tree(value);
  // push that child into the children array
  this.children.push(child);
};

treeMethods.contains = function(target) {
  // Specification:
  // Inputs: target value
  // Output: boolean value, true or false
  // Constraints: none
  // Edge Cases: none

  // Justification: The purpose is to determine if the target can be found anywhere in the tree
  // Explanation: We will recursively check each child to see if it contains our target value. If it does, return true. Else, return false

  // Pseudocode:
  // declare result var and set default to false
  var result = false;
  // create inner helper function that takes in current node
  var recurse = function(node) {
    // base case - check if current node's value is target
    if (node.value === target) {
      // if is, update result to true
      result = true;
    }
    // if current node has children
    if (node.children.length > 0) {
      // iterate over children
      for (var i = 0; i < node.children.length; i++) {
        // recursively check each children if equals target
        recurse(node.children[i]);
      }
    }
  }
  // call inner helper recurse with argument of this
  recurse(this);
  // return result
  return result;
}

//   // declare result variable that defaults to false
//   var result = false;

//   //Inner helper fuction
//   var recurse = function (target) {
//     // Base Case: if tree exists
//     // then we check if value is equal to target
//     if (this.value === target) {
//       // then result equals true
//       result = true;
//     }
//     // Recursive Case: if tree does have children
//     if (this.children.length > 0) {
//       // iterate over the array of children
//       for (var i = 0; i < this.children.length; i++) {
//         // recursively call each element of the array on the contains function
//         return recurse(target);
//       }
//     }
//     // return result
//   };
//   recurse(target);
//   return result;
// };



/*
 * Complexity: What is the time complexity of the above functions?
 */

 //Must use functional with shared methods style