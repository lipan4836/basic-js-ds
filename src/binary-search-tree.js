const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode
    } else {
      this.addNode(this.head, newNode);
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      node.left === null ?
        node.left = newNode :
        this.addNode(node.left, newNode);
    } else {
      node.right === null ?
        node.right = newNode :
        this.addNode(node.right, newNode);
    }
  }

  has(data) {
    return this.searchNode(data) !== null;
  }

  find(data) {
    return this.searchNode(data);
  }

  searchNode(data) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (data === currentNode.data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  remove(data) {
    this.head = this.removeNode(this.head, data);
  }

  removeNode(node, data) {
    if (!node) return;

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } else if (node.data < data) {
      node.right = this.removeNode(node.right, data);
    } else {
      if (!node.left && !node.right) return null;

      if (!node.left) return node.right;

      if (!node.right) return node.left;

      // случай, когда оба поддерева существуют
      let minFromRight = node.right;

      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }

      node.data = minFromRight.data;
      node.right = removeNode(node.right, minFromRight.data);
      return node;
    }
  }

  min() {
    if (!this.head) return;

    let currentNode = this.head;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (!this.head) return;

    let currentNode = this.head;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};