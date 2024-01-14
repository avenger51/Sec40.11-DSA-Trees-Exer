/** BinaryTreeNode: node for a general tree. */


//ok, this is used to represent individual nodes in the tree
class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

//this is used to represent the entire tree....it has 'root' because it needs to refer to the root of the tree..
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

// /** minDepth(): return the minimum depth of the tree -- that is,
//   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    if(node === null ){
      return 0;
    }
    if(node.left === null && node.right === null) {
      return 1;
    }
    if (node.left === null) {
      return 1 + this.minDepth(node.right);
    }

    if (node.right === null) {
      return 1 + this.minDepth(node.left);
    }

    return 1 + Math.min(this.minDepth(node.left), this.minDepth(node.right));
  }



// /** maxDepth(): return the maximum depth of the tree -- that is,
//   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    if(node === null){
      return 0; //test case?
    }
  
    if(node.left === null && node.right === null){
      return 1; //test to see if 1 deep?
    }
    if( node.left === null) {
      return 1 + this.maxDepth(node.right);
    }
    if( node.right === null){
      return 1 + this.BinaryTreemaxDepth(node.left);
    }
    return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right)); //checks the left node against the right node for higher val
  }

  ///** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
  // * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
  let numHolder = 0;

  function maxSumHelper(node){
    if(node === null){
      return 0; //test case?
  }
  let leftMax = Math.max(0, maxSumHelper(node.left));
  let rightMax = Math.max(0, maxSumHelper(node.right));

  result = Math.max(numHolder, node.val + leftMax + rightMax);

  return node.val + Math.max(leftMax, rightMax);
}

  maxSumHelper(this.root);
return result; // Return the computed maximum sum
}


  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  //Lower Bound: In this context, the "lower bound" is a value that you use as a reference 
  //or starting point. The goal of the nextLarger(lowerBound) method is to find the smallest 
  //value in the binary tree that is larger than this reference value.
  nextLarger(lowerBound) {
    let result = null;

    function findNextLarger(node) {
      if (node === null) {
        return;
      }

      // If node's value is greater than lowerBound and either result is null
      // or node's value is smaller than the current result
      if (node.val > lowerBound && (result === null || node.val < result)) {
        result = node.val;
      }

      // Recursively check left and right children
      findNextLarger(node.left);
      findNextLarger(node.right);
    }

    findNextLarger(this.root);
    return result;
  }

  //lost me on these...
  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

//  areCousins(node1, node2) {
//
//  }
//
//  /** Further study!
//   * serialize(tree): serialize the BinaryTree object tree into a string. */
//
//  static serialize() {
//
//  }
//
//  /** Further study!
//   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */
//
//  static deserialize() {
//
//  }
//
//  /** Further study!
//   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
//   * of two nodes in a binary tree. */
//
//  lowestCommonAncestor(node1, node2) {
//    
//  }
//}
//
module.exports = { BinaryTree, BinaryTreeNode };
//