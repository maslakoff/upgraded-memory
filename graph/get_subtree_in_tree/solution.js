import BinaryNode from '../_implementation/BinaryNode.js';
import ArrayQueue from "../../stack_and_queue/_implementation/ArrayQueue.js";

function getCornerNode(subTree, direction) {
  let current = subTree;
  let depth = 0;
  while (current) {
    depth++
    if (current[direction]) {
      current = current[direction];
    } else {
      return { node: current, depth }
    }
  }
}

function hasSameCorners(tree, leftCorner, rightCorner) {
  let leftDepth = leftCorner.depth;
  let currentLeft = tree;
  for(let l = 0; l < leftDepth - 1; l++) {
    currentLeft = currentLeft.left;
  }

  let rightDepth = rightCorner.depth;
  let currentRight = tree;
  for(let l = 0; l < rightDepth - 1; l++) {
    currentRight = currentRight.right;
  }

  return currentLeft.value === leftCorner.node.value && currentRight.value === rightCorner.node.value;
}

function sbtr(tree, subtree) {
  let result = true;


  if (subtree && subtree.value) {
    result = result && tree.value === subtree.value;
  }
  if (subtree && subtree.left) {
    result = result && subtree.left.value === tree.left.value && sbtr(subtree.left);
  }
  if (subtree && subtree.right) {
    result = result && subtree.right.value === tree.right.value && sbtr(subtree.right);
  }

  return result;
}

const isSubTree = (tree, subTree) => {
 const leftCorner = getCornerNode(subTree, 'left');
 const rightCorner = getCornerNode(subTree, 'right');

  const queue = new ArrayQueue();
  queue.add(tree);
  let current = queue.remove();
  while (current) {
    if (current.left) {
      queue.add(current.left);
    }
    if (current.right) {
      queue.add(current.right);
    }
    if (current.value === subTree.value) {
      const sameCorners = hasSameCorners(current, leftCorner, rightCorner);
      if (sameCorners) {
        const same = sbtr(current, subTree);
        if (same) {
          return true;
        }
      }
    }

    current = queue.remove();
  }

  return false;
}


const tree = new BinaryNode(50,
  new BinaryNode(25,
    new BinaryNode(13,
      new BinaryNode(7,
        new BinaryNode(4),
        new BinaryNode(10),
      ),
      new BinaryNode(20,
        new BinaryNode(15,
          new BinaryNode(13),
          new BinaryNode(18),
        ),
        new BinaryNode(26),
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

const subTree = new BinaryNode(25,
  new BinaryNode(13,
    new BinaryNode(7,
      new BinaryNode(4),
      new BinaryNode(10),
    ),
    new BinaryNode(20,
      new BinaryNode(15,
        new BinaryNode(13),
        new BinaryNode(18),
      ),
      new BinaryNode(25),
    ),
  ),
  new BinaryNode(33)
);


console.log(isSubTree(tree, subTree));
// console.log(bstToPossibleArrays(node1));
