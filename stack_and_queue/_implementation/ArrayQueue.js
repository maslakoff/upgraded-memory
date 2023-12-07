export default class ArrayQueue {
  constructor() {
    this.data = [];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  add(item) {
    return this.data.push(item);
  }

  remove() {
    return this.data.shift();
  }

  addAll(items) {
    return this.data.push(...items);
  }
}
