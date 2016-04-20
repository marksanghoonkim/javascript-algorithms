/*
A tree is "superbalanced" if the difference between the depths of any two leaf nodes is no greater than one.
*/

function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};


function superbalancedTreeCheck(tree) {
  // need to traverse the tree, find leaves and keep track of the depths
  // if we ever find two leaves whose difference of depths is greater than one, then return false
  // otherwise, check the rest of the tree and if isSuperbalanced, return true

  var minDepth = null;
  var maxDepth = null;
  var isSuperbalanced = true;

  var recurse = function(tree, depth) {
    // base case: if we find a leaf, we need to note the depth and compare to our minDepth/maxDepth
    // if it is the first time we find a leaf, this will be our starting minDepth/maxDepth
    if (tree.left === null && tree.right === null) {
      if (minDepth === null && maxDepth === null) {
        minDepth = depth;
        maxDepth = depth;
      } else {
        // check to update minDepth and maxDepth
        if (depth < minDepth) {
          minDepth = depth;
        } else if (depth > maxDepth) {
          maxDepth = depth;
        }

        if (maxDepth - minDepth > 1) {
          isSuperbalanced = false;
        }
      }
    } else {
      // recurse case
      if (tree.left) {
        recurse(tree.left, depth+1);
      }
      if (tree.right) {
        recurse(tree.right, depth+1);
      }
    }
  }

  recurse(tree, 0);

  return isSuperbalanced;
}


