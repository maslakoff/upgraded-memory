import BinaryNode from '../_implementation/BinaryNode.js';

function hasNode(root, node) {
  if (!root) {
    return false;
  }
  let result = false;

  const { left, right } = root;
  if (left && left === node) {
    result = true;
  }
  if (right && right === node) {
    result = true;
  }

  return result || hasNode(left, node) || hasNode(right, node);
}
function commonNode(root, search1, search2) {

  const leftSubTree = root.left;
  const rightSubTree = root.right;

  const isLeftNode = hasNode(leftSubTree, search1);
  const isRightNode = hasNode(rightSubTree, search2);

  const bothOnLeft = hasNode(leftSubTree, search1) && hasNode(leftSubTree, search2);
  const bothOnRight = hasNode(rightSubTree, search1) && hasNode(rightSubTree, search2);

  if (bothOnLeft) {
    return commonNode(leftSubTree, search1, search2);
  }
  if (bothOnRight) {
    return commonNode(rightSubTree, search1, search2);
  }

  if (isLeftNode && isRightNode) {
    return root;
  }

  return null;
}

const searchNode1 = new BinaryNode(4);
const searchNode2 = new BinaryNode(13);

const node1 = new BinaryNode(50,
  new BinaryNode(25,
    new BinaryNode(14,
      new BinaryNode(7,
        searchNode1,
        new BinaryNode(10),
      ),
      new BinaryNode(20,
        new BinaryNode(15,
          searchNode2,
          new BinaryNode(18),
        ),
        new BinaryNode(25),
      ),
    ),
    new BinaryNode(33)
  ),
  new BinaryNode(75,
    new BinaryNode(55,
      new BinaryNode(50),
      new BinaryNode(70),
    ),
    new BinaryNode(85,
      new BinaryNode(75),
      new BinaryNode(90),
    ),
  )
);

console.log(commonNode(node1, searchNode1, searchNode2));
