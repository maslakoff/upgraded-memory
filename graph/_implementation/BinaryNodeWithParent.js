import BinaryNode from "./BinaryNode.js";

export default class BinaryNodeWithParent extends BinaryNode {
  constructor(value, left = null, right = null, parent = null) {
    super(value, left = null, right = null);
    this.parent = parent;
  }

  setParent(node) {
    this.parent = node;
  }
}
