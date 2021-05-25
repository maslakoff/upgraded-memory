import { Node } from '../_implementation/DirectedGraph.js';
import ArrayQueue from "../../stack_and_queue/_implementation/ArrayQueue.js";

const nodeH = new Node('H');
const nodeI = new Node('I');
const nodeJ = new Node('J');
const nodeG = new Node('G', [nodeH]);
const nodeF = new Node('G', [nodeI]);
const nodeE = new Node('E', [nodeJ]);
const nodeB = new Node('B', [nodeG]);
const nodeD = new Node('D', [nodeE]);
const nodeC = new Node('C', [nodeF, nodeD]);
const nodeA = new Node('A', [nodeB, nodeC]);
nodeH.addChild(nodeA);

function routeExists(startNode, finishNode) {
  const queue = new ArrayQueue();

  queue.add(startNode);
  let current = queue.remove();
  while (current) {
    if (current === finishNode) {
      return true;
    }
    if(!current.isVisited() && current.children.length > 0) {
      queue.addAll(current.children)
    }
    current.setVisited();
    current = queue.remove();
  }
  return false;
}


console.log(routeExists(nodeH, nodeG));


