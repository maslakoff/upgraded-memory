export default class ArrayStack {
  constructor() {
    this.data = [];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  pop() {
    return this.data.pop()
  }

  push(item) {
    this.data.push(item)
  }

  peek() {
    const element = this.data.pop();
    this.data.push(element);
    return element
  }
}
