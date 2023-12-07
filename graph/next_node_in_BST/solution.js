import BinaryNode from '../_implementation/BinaryNode.js';
import BinaryNodeWithParent from '../_implementation/BinaryNodeWithParent.js';

function getNextNode(node) {

   const { left, right, value } = tree;
   let result = true;
   if (left) {
     result = result && value >= left.value && isBST(left, min, value);
   }
   if (right) {
     result = result && value < right.value && isBST(right, value, max);
   }

   return result;
}

// root
const node50 = new BinaryNodeWithParent(50);

// left tree
const node4  = new BinaryNodeWithParent(4, null, null)
const node10  = new BinaryNodeWithParent(4, null, null)
const node7  = new BinaryNodeWithParent(7, node4, node10, node13)
node4.setParent(node7);
node10.setParent(node7);
const node13 = new BinaryNodeWithParent(13, null, null, node25);

const node25 = new BinaryNodeWithParent(25, null, null, node50);
node13.setParent(node25);
const node15 = new BinaryNodeWithParent(15)
const node20 = new BinaryNodeWithParent(20, node15, node25, node13)
node15.setParent(node20);
node25.setParent(node20);
node20.setParent(node13)

// right subtree
const node85 = new BinaryNodeWithParent(85, null, null);
const node55 = new BinaryNodeWithParent(55, null, null);
const node75 = new BinaryNodeWithParent(75, node55, node85, node50);
node55.setParent(node75);
node85.setParent(node75);

const node14 = new BinaryNodeWithParent(14, null, null, node15);
const node18 = new BinaryNodeWithParent(18, null, null, node15);


const node1 = new BinaryNode(50,
  new BinaryNodeWithParent(25,
    new BinaryNode(13,
      new BinaryNode(7,
        new BinaryNode(4),
        new BinaryNode(10),
      ),
      new BinaryNode(20,
        new BinaryNode(15,
          new BinaryNode(14),
          new BinaryNode(18),
        ),
        new BinaryNode(25),
      ),
    ),
    new BinaryNode(33),
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



console.log(node1);
