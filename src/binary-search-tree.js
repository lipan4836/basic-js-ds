const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this.addNode(this.rootNode, data)
  }

  addNode(node, data) {
    if (!node) return new Node(data);
    if (data === node.data) return node;
    if (data > node.data) node.right = this.addNode(node.right, data);
    if (data < node.data) node.left = this.addNode(node.left, data);

    return node;
  }

  has(data) {
    let node = this.rootNode;

    while (node) {
      if (node.data === data) return true;
      
      data < node.data ?
        node = node.left :
        node = node.right;
    }

    return false;
  }

  find(data) {
    let node = this.rootNode;

    while (node) {
      if (node.data === data) return node;

      data < node.data ?
        node = node.left :
        node = node.right;
    }

    return null;
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) return null;

    if (data === node.data) {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    let min = node.right;

    while (min.left) min = min.left;

    node.data = min.data;
    node.right = this.removeNode(node.right, min.data);
    return node;
  }

  min() {
    let node = this.rootNode;

    if (!node.left) return;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    let node = this.rootNode;

    if (!node.right) return;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};