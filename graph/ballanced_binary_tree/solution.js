import BinaryNode from '../_implementation/BinaryNode.js';

function countLevel(tree) {
  let left = tree.left;
  let result = 1;
  if (left) {
    return result + countLevel(left);
  }
  let right = tree.right;
  if (right) {
    return result + countLevel(right);;
  }
  return result;
}

function balanced(tree) {
  const leftLevel = countLevel(tree.left);
  const rightLevel = countLevel(tree.right);
  return Math.abs(leftLevel - rightLevel) <= 1;
}

const node3llB = new BinaryNode(12);
const node3llNB = new BinaryNode(12, new BinaryNode(6, new BinaryNode(2)));
const node3lr = new BinaryNode(40);
const node2left = new BinaryNode(25, node3llB, node3lr);

const node3rl = new BinaryNode(65);
const node3rr = new BinaryNode(80);
const node2right = new BinaryNode(75, node3rl, node3rr);
const node1 = new BinaryNode(50, node2left, node2right);


console.log(balanced(node1))
