export class Node {
  constructor(name, children = []) {
    this.name = name;
    this.children = children;
    this.visited = false;
  }

  setVisited() {
    this.visited = true;
  }

  isVisited() {
    return this.visited;
  }

  addChild(child) {
    this.children = [...this.children, child]
  }

}
