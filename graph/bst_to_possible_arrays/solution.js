import BinaryNode from '../_implementation/BinaryNode.js';

const getPermutation = (data) => {
  return [[data[0], data[1]], [data[1], data[0]]];
}

const getAllCombinations = (data) => {
  const result = [];

  return result;
}

function bstToPossibleArrays(tree) {
  const result = [];
  const { left, right } = tree;

  const perm = getPermutation([left.value, right.value]);
  const leftPerm = getPermutation(left.left.value, left.right.value);

  perm.forEach(variant => {
    console.log(variant)
    result.push([tree.value, ...variant])
  })

  return result;
}


const node1 = new BinaryNode(50,
  new BinaryNode(25,
    new BinaryNode(13,
      // new BinaryNode(7,
      //   new BinaryNode(4),
      //   new BinaryNode(10),
      // ),
      // new BinaryNode(20,
      //   new BinaryNode(15,
      //     new BinaryNode(13),
      //     new BinaryNode(18),
      //   ),
      //   new BinaryNode(25),
      // ),
    ),
    new BinaryNode(33)
  ),
  new BinaryNode(75,
    new BinaryNode(55,
      // new BinaryNode(50),
      // new BinaryNode(70),
    ),
    new BinaryNode(85,
      // new BinaryNode(75),
      // new BinaryNode(90),
    ),
  )
);


// console.log(getAllCombinations([1, 2, 3, 4]))
// console.log(bstToPossibleArrays(node1));

const a = { b: { f: 'f' } };
const b = Object.assign({}, a);

console.log(a.b === b.b)
