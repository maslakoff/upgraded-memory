import BinaryNode from './BinaryNode.js';

export class BinarySearchTree {
  constructor() {
    this.root = null;
    this.nodesCounter = 0;
    this.values = [];
  }

  get left() {
    if (!this.root) {
      throw new Error('No root node')
    }
    return this.root.left
  }

  get right() {
    if (!this.root) {
      throw new Error('No root node')
    }
    return this.root.right;
  }

  size() {
    return this.nodesCounter;
  }

  __insert(value, node = this.root) {
    if (node.value > value) {
      if (node.left) {
        this.__insert(value, node.left)
      } else {
        node.left = new BinaryNode(value);
      }
    } else {
      if (node.right) {
        this.__insert(value, node.right)
      } else {
        node.right = new BinaryNode(value);
      }
    }
  }

  add(value) {
    const node = new BinaryNode(value);
    if (!this.root) {
      this.root = node;
    } else {
      this.__insert(value);
    }
    this.nodesCounter++;
    this.values.push(value);
    return this;
  }

  __find(value, node = this.root) {
    if (node.value === value) {
      return node;
    }
    if (node.left) {
      return this.__find(value, node.left)
    }
    if (node.right) {
      return this.__find(value, node.right)
    }
  }

  __findParentNode(value, node = this.root) {
    if (node.left) {
      if (node.left.value !== value) {
        return this.__findParentNode(value, node.left);
      } else {
        return node;
      }
    }
    if (node.right) {
      if (node.right.value !== value) {
        return this.__findParentNode(value, node.right);
      } else {
        return node;
      }
    }
  }

  find(value) {
    const node = this.__find(value);
    return node || false;
  }

  __rebuild(node) {
    if (node.left) {
      this.__insert(node.left.value);
      this.__rebuild(node.left);
    }
    if (node.right) {
      this.__insert(node.right.value);
      this.__rebuild(node.right);
    }
  }

  __removeFromValues(value) {
    const index = this.values.indexOf(value);
    if (index !== -1) {
      this.values.splice(index, 1);
    }
  }

  remove(value) {
    const node = this.__find(value);
    if (node) {
      const parentNode = this.__findParentNode(value)
      if (parentNode) {
        if (parentNode.left === node) {
          parentNode.left = null;
        }
        if (parentNode.right === node) {
          parentNode.right = null;
        }
      }
      this.__rebuild(node);
      this.nodesCounter--;
      this.__removeFromValues(value);
    }
    return node || false;
  }

  getRandomNode() {
    const randomIndex = Math.floor(Math.random() * this.size());
    const value = this.values[randomIndex];
    console.log(this.values, randomIndex, value, this.root)
    return this.find(value);
  }
}
