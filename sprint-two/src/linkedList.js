var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //input: takes in value that is a number
    //output: add a value which is the node to the end of the list. node contains value and next reference.
    //constraints: none
    //edge cases: if list is empty, set the new node as the head and tail

    //justification: this function adds a node to the end of a linked list and sets it as the tail.

    //explanation: It takes in a value and passes that value into the Node class and creates an instance of that class. It puts the node to the end of the list and sets the node's two properties, value and next.

    //visualization:

    //pseudocode
    let node = Node(value);
    //If list head is null
    if (list.head === null) {
    //then create a new instance of the node using class Node function and point head and tail to that node
      list.head = node;
      list.tail = node;
    }
    //If list head is not null and
    if (list.head !== null) {
      //then we add the new node to the tail.next
      list.tail.next = node;
      //list.tail is point to the new node
      list.tail = list.tail.next;
    }


  };

  list.removeHead = function() {
    var oldHead = list.head.value;
    // if list head is not null
    if (list.head !== null) {
      // list head is equal to list.head.next
      list.head = list.head.next;
    }
    return oldHead;

  };


  list.contains = function(target) {
    // currNode = list.head
    let currNode = list.head;
    // while node does not equal null
    while (currNode) {

      //then we check if node is equal to target
      if (currNode.value === target) {
        return true;
      }
      // update node to equal node.next
      currNode = currNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


//Input: