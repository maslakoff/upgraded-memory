import ArrayStack from "../_implementation/ArrayStack.js";


const stack = new ArrayStack();

stack.push(2);
stack.push(3);
stack.push(6);
stack.push(1);

const helperStack = new ArrayStack();

let current = stack.pop();
while (current) {
  if (helperStack.isEmpty()) {
    helperStack.push(current);
  } else {
    const helperElement = helperStack.peek();
    if (helperElement < current) {
      helperStack.push(current)
    } else {
      const b = helperStack.pop();
      stack.push(b)
      helperStack.push(current)

    }
  }
  current = stack.pop();
}

console.log(stack, helperStack)
