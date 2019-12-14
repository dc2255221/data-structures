//UNDIRECTED GRAPH IN PSEUDOCLASSICAL STYLE


// Instantiate a new graph
var Graph = function() {
  this.numberOfNodes = 0;
  this.adjList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //justification: Add a node to the graph
  //input: node, which is a value
  //output: add the node with input as key and value as array into the adjlist object
  //constraints: Be careful of adding duplicate nodes,
  //edge cases: none
  //explanation: Take the node and add it as a key into the list object, and set the value to an empty array, in order to store all the edges.
  //pseudocode:
  //If list does not contain the node as a key
  if (!this.adjList[node]) {
    //then add that node as a key and the value to an empty array in the list object
    this.adjList[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //justification: Check if the node is a key of the adjList
  //input: a value
  //output: a boolean
  //constraints: nada
  //edge case: nada
  //explanation: Taking a value and checking to see if that value exists as a key in the adjList. If it exists, return true, else return false.
  //pseudo
  //If list contains node
  if (this.adjList[node]) {
    //return true
    return true;
  }
  //return false
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //justifcation; Delete the node key and value property from the adjList
  //input: target node
  //output: modified object
  //constraints: nada
  //edge cases: nada
  //explanation: Taking in a node and remove the key and property from the adjList if it is in there. We would need to iterate over the properties in the list, and then iterate over each properties edge array, and then remove the node if it is contained within the edge array.
  //pseudocode
  //If node is in list
  if (this.adjList[node]) {
    //delete the node
    delete this.adjList[node];
    //iterate over the adjList
    for (key in this.adjList) {
      //If edge array contains node
      if (this.adjList[key].includes(node)) {
        //find index
        let index = this.adjList[key].indexOf(node);
        //Use splice to remove node
        this.adjList.splice(index, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // justification: check if the edges exist in both nodes
  // input: two nodes
  // output: boolean
  // constraints: none
  // edge cases: none
  // explanation: check the edge array for each node to see if the array contains a reference to the other node
  // pseudocode

  if (this.adjList[fromNode].includes(toNode) && this.adjList[toNode].includes(fromNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // justification: add edges to each node
  // input: nodes
  // output: modified edge arrays for both nodes
  // constraints: none
  // edge cases: none
  // explanation: add the input nodes to the other node's edge array
  // pseudocode:
  // add the fromNode to the toNode's edge array
  this.adjList[toNode].push(fromNode);
  // add the intoNode to the fromNode's edge array
  this.adjList[fromNode].push(toNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // justification: remove edges from both node edge arrays
  // input: two nodes
  // output: modified edge arrays for both nodes
  // constraints: nada
  // edge cases: nada
  // explanation: access each node's edge array and remove the reference of the other node
  // pseudocode:
  // find index of toNode in fromNodes's edge array
  let index = this.adjList[fromNode].indexOf(toNode);
  // use splice to remove toNode from fromNode's edge array
  this.adjList[fromNode].splice(index, 1);
  // find index of fromNode in toNode's edge array
  index = this.adjList[toNode].indexOf(fromNode);
  // use splice to remove fromNode from toNode's edge array
  this.adjList[toNode].splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterate over the adjList
  for (key in this.adjList) {
    //pass in the adjList key into the cb function
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


