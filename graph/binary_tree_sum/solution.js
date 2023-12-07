import { BinarySearchTree } from "../_implementation/BinarySearchTree.js";
import ArrayQueue from "../../stack_and_queue/_implementation/ArrayQueue.js";

function hasSum(tree, targetSum, runningSum = 0) {
  if (!tree) {
    return false
  }
  const { left, right, value } = tree;
  runningSum += value;
  console.log(`Tree start: ${value}, sum: ${runningSum}`)
  let result = false;
  if (runningSum === targetSum) {
    result = true;
  } else {
    if (left) {
      if(hasSum(left, targetSum, runningSum) === targetSum) {
        result = true;
      }
    }
    if (right) {
      if(hasSum(right, targetSum, runningSum) === targetSum) {
        result = true;
      }
    }
  }
  return result;
}

function getRoutesForSum(tree, targetSum) {
  let node = tree;
  const queue = new ArrayQueue();
  queue.add(node);
  let current = queue.remove();
  let runningSum = 0;
  while (current) {
    if(current.left) {
      queue.add(current.left);
    }
    if(current.right) {
      queue.add(current.right);
    }
    runningSum += current.value;
    console.log(hasSum(current, targetSum))
    current = queue.remove();
  }
}

const tree = new BinarySearchTree()

tree.add(50)
tree.add(25)
tree.add(75)
tree.add(23)
tree.add(33)
tree.add(60)
tree.add(80)
tree.add(10)
tree.add(15)
tree.add(30)
tree.add(35)

// console.log(tree.root);
console.log(getRoutesForSum(tree.root, 58))
// console.log(getRoutesForSum(tree.root, 173))
