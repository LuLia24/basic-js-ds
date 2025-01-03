const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    if (!this.tree) {
      this.tree = new Node(data);
    } else {
      let currentNode = this.tree;

      while (currentNode) {
        if (data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = new Node(data);
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = new Node(data);
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  has(data) {
    if (!this.tree) {
      return false;
    } else {
      let currentNode = this.tree;

      while (currentNode) {
        if (data === currentNode.data) {
          return true;
        } else {
          if (data > currentNode.data) {
            currentNode = currentNode.right;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
      return false;
    }
  }

  find(data) {
    if (!this.tree) {
      return null;
    } else {
      let currentNode = this.tree;

      while (currentNode) {
        if (data === currentNode.data) {
          return currentNode;
        } else {
          if (data > currentNode.data) {
            currentNode = currentNode.right;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
      return null;
    }
  }

  remove(data) {
    this.tree = deleteNode(this.tree, data);

    function deleteNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = deleteNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = deleteNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.tree) {
      return null;
    } else {
      let currentNode = this.tree;
      while (currentNode.left) {
        currentNode = currentNode.left;
      }

      return currentNode.data;
    }
  }

  max() {
    if (!this.tree) {
      return null;
    } else {
      let currentNode = this.tree;
      while (currentNode.right) {
        currentNode = currentNode.right;
      }

      return currentNode.data;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
