import BinaryNode from '../_implementation/BinaryNode.js';

function isBST(tree, min = -Infinity, max = Infinity) {

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


const node1 = new BinaryNode(50,
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



console.log(isBST(node1));
