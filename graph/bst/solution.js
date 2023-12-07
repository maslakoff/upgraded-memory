import {BinarySearchTree} from "../_implementation/BinarySearchTree.js";


const tree = new BinarySearchTree()

tree.add(50)
tree.add(25)
tree.add(75)
tree.add(13)
tree.add(33)
tree.add(60)
tree.add(80)
tree.add(10)
tree.add(15)
tree.add(30)
tree.add(35)


// console.log(tree.left)
// console.log(tree.right)
console.log(tree.find(75))
// tree.remove(25)
// console.log('left', tree.left)

// console.log(tree.getRandomNode())
