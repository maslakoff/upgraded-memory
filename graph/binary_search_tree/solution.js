import BinaryNode from '../_implementation/BinaryNode.js';


const data =  new Array(30).fill(null).map((item, index) => index+1);

const midIndex = Math.floor(data.length / 2);

const rootNode = new BinaryNode(midIndex);


function getHalfSizeIndex(items) {
  if (items.length === 1) {
    return 0;
  }
  return Math.floor(items.length / 2);
}

// function getLeftNode(items) {
//   const sliceLeftIndex = Math.floor(items.length / 2);
//   return new BinaryNode(sliceLeft[sliceLeftIndex]);
// }
//
// function getRightNode(items) {
//   const sliceRightIndex = Math.floor(items.length / 2);
//   return new BinaryNode(sliceRight[sliceRightIndex]);
// }

// let sliceLeft = data;
// let leftIndex = getHalfSizeIndex(sliceLeft);
// let nodeToAssign = rootNode;
// while (sliceLeft.length) {
//   console.log(sliceLeft)
//   sliceLeft = sliceLeft.slice(0, leftIndex - 1);
//   leftIndex = getHalfSizeIndex(sliceLeft)
//   if (leftIndex) {
//     const leftNode = new BinaryNode(sliceLeft[leftIndex]);
//     nodeToAssign.setLeft(leftNode)
//     nodeToAssign = leftNode;
//   }
// }

let leftData = data.slice(0, midIndex - 1);
let nodeToAssign = rootNode;
while (leftData.length) {
  const leftIndex = getHalfSizeIndex(leftData);
  const leftNode = new BinaryNode(leftData[leftIndex]);
  nodeToAssign.setLeft(leftNode)
  nodeToAssign = leftNode;
  leftData = leftData.length === 2 ? [leftData[0]] : leftData.slice(0, leftIndex - 1);
}


let rightData = data.slice(midIndex, data.length);
nodeToAssign = rootNode;
while (rightData.length) {
  const rightIndex = getHalfSizeIndex(rightData);
  const rightNode = new BinaryNode(rightData[rightIndex]);
  nodeToAssign.setRight(rightNode)
  nodeToAssign = rightNode;
  console.log(rightData, rightIndex, `${rightData[rightIndex]}`);
  rightData = rightIndex === 0 ? [] : rightData.slice(rightIndex, rightData.length);
}



console.log(rootNode.left.left.left.left)
console.log(rootNode.right.right.right)
