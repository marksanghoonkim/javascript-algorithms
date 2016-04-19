/*
Write a function to check that a binary tree is a valid binary search tree.
*/

// Tree code
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
// end of Tree code

function bstChecker(treeRoot, lowerBound, upperBound) {
  lowerBound = lowerBound || -Infinity;
  upperBound = upperBound ||  Infinity;

  if (!treeRoot) return true;

  if (treeRoot.value > upperBound || treeRoot.value < lowerBound) {
    return false;
  }

  return bstCheckerRecursive(treeRoot.left, lowerBound, treeRoot.value) &&
    bstCheckerRecursive(treeRoot.right, treeRoot.value, upperBound);
}