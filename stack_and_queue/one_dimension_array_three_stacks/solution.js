

class Stack {
  constructor(stackSize, stackNumbers = 3) {
    this.stackNumbers = stackNumbers;
    this.stackSize = stackSize;
    this.data = this.__createStack(stackNumbers, stackSize)
  }

  __createStack(stacksNumber = 1, size = 1) {
    const stack = [];
    for(let i = 0; i < stacksNumber; i++) {
      for(let j = 0; j < size; j++) {
        stack.push(undefined)
        // stack.push(`${i}-${j}`)
      }
    }
    return stack;
  }

  __checkStackIndex(stackIndex) {
    if (stackIndex < 0 || stackIndex > this.stackNumbers - 1) {
      throw new Error('Invalid index')
    }
  }

  __getSearchPositions(stackIndex) {
    let start = stackIndex * this.stackSize;
    const end = start + this.stackSize;
    return [start, end]
  }

  push(stackIndex, value) {
    this.__checkStackIndex(stackIndex);
    const [start, end] = this.__getSearchPositions(stackIndex);
    for (let i = start; i < end; i++) {
      if (this.data[i] === undefined) {
        this.data[i] = value;
        break;
      }
      if(end === (i + 1)) {
        throw new Error('Stack is full')
      }
    }
  }

  pop(stackIndex) {
    this.__checkStackIndex(stackIndex);
    const [start, end] = this.__getSearchPositions(stackIndex);

  }
}

const stack1 = new Stack(5, 3)
stack1.push(2, 1)
console.log(stack1)
