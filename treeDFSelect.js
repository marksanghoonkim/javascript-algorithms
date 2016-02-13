// Implement a depth-first method on a tree class.
// DFSelect accepts a filter function, calls that function on each of the nodes in Depth First order, and returns a flat array of node values of the tree for which the filter returns true.

var Tree = function(value){
  this.value = value;
  this.children = [];
  this.depth = 0;
};

Tree.prototype.DFSelect = function(filter) {
  var results = [];
  
  var recurse = function(tree) {
    // call filter function on current node
    if (filter(tree.value, tree.depth)) {
      results.push(tree.value);
    }
    // base case: current node has no children, will return
    if (tree.children === undefined) {
      return;
    } else {
    // recursion case: current node has children, call recurse on each node
      for (var i = 0; i < tree.children.length; i++) {
        recurse(tree.children[i]);
      }
    }
  };

  recurse(this);

  return results;
};

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
    // add a depth property to the new child
    child.depth = this.depth + 1;
  }
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
