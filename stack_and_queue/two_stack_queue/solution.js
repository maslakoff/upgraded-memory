import ArrayStack from '../_implementation/ArrayStack.js';

class MyQueue {
  constructor() {
    this.directStack = new ArrayStack();
    this.reversedStack = new ArrayStack();
  }

  _changeStacks(firstStack, secondStack) {
    let current = firstStack.pop();
    while (current) {
      secondStack.push(current);
      current = firstStack.pop();
    }
  }

  /**
   * добавить элемент в начало списка
   * @param item
   */
  add(item) {
    this.directStack.push(item);
  }

  /**
   * удалить первый элемент из списка
   */
  remove() {
    if (this.directStack.isEmpty()) {
      throw new Error('Empty queue');
    }
    this._changeStacks(this.directStack, this.reversedStack);
    const element = this.reversedStack.pop();
    this._changeStacks(this.reversedStack, this.directStack);
    return element;
  }

  /**
   * вернуть элемент в начало очереди
   */
  peek() {
    this._changeStacks(this.directStack, this.reversedStack);
    const element = this.reversedStack.peek();
    this._changeStacks(this.reversedStack, this.directStack);
    return element;
  }

  /**
   * вернуть true в том,
   * и только в том случае, если очередь пуста
   */
  isEmpty() {
    return this.directStack.isEmpty();
  }
}

const queue = new MyQueue();
queue.add('element1')

queue.add('element2')
queue.remove()
queue.remove()

console.log(queue.isEmpty())

console.log(queue)
