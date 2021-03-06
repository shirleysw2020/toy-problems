/**
  *
  * Implement a `BFSelect` method on this Tree class.
  *
  * BFSelect accepts a filter function, calls that function on each of the nodes
  * in Breadth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
  *   root1.BFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 3, 5, 7]
  *
  *   root1.BFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

/*
 * Basic tree that stores a value.
 */

var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.BFSelect = function(filter) {
  var res = [], queue = [], depthQueue = [];
  // put first node in queue
  queue.push(this);
  depthQueue.push(0);
  // while queue has node left
  while(queue.length) {
    current = queue.shift();
    currentDepth = depthQueue.shift();
    if (filter(current.value, currentDepth)) {
      res.push(current.value);
    }
    for (const child of current.children) {
      console.log(child.value);
      queue.push(child);
      depthQueue.push(currentDepth + 1);
    }
  }
  return res;

  // recursion method:
  //     1
  //   2   3
  // 4
  // function helper(nodes, depth, res) {
  //   var nextNodes = [];
  //   for (var i = 0; i < nodes.length; i++) {
  //     if (filter(nodes[i].value, depth)) {
  //       res.push(nodes[i].value);
  //     }
  //     // [[[]]] wrong
  //     // take all elements inside nodes i children and place it into a new array
  //     nextNodes = [...nextNodes, ...nodes[i].children];   //[2, 3]
  //   }
  //   // check if nextNodes be empty?
  //   if (nextNodes.length == 0) {
  //     return res;
  //   } else {
  //     return helper(nextNodes, depth + 1, res);
  //   }
  // }
  // return helper([this], 0, [])
}

/**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};


// var root1 = new Tree(1);
// var branch2 = root1.addChild(2);
// var branch3 = root1.addChild(3);
// var leaf4 = branch2.addChild(4);
// var leaf5 = branch2.addChild(5);
// var leaf6 = branch3.addChild(6);
// var leaf7 = branch3.addChild(7);

// const testsolution = root1.BFSelect(function (value, depth) {
//   return value % 2;
// })
// console.log(testsolution);// [1, 3, 5, 7]