import LinkedList from "../_implementation/LinkedList.js";

export function reversedSum(first, second) {
  const result = new LinkedList();
  let currentFirst = first.head;
  let currentSecond = second.head;

  let digit = 0;
  while (currentFirst) {
    let sum = digit;
    if (currentFirst) {
      sum += currentFirst.data;
    }
    if (currentSecond) {
      sum += currentSecond.data;
    }
    if (sum >= 10) {
      const remainder = sum % 10;
      result.append(remainder);
      digit = 1;
    } else {
      digit = 0;
      result.append(sum);
    }

    currentFirst = currentFirst ? currentFirst.next : null;
    currentSecond = currentSecond ? currentSecond.next : null;
  }
  if(digit === 1) {
    result.append(1);
  }

  return result;
}

function getListSize(list) {
  let counter = 0
  let current = list.head;
  while (current) {
    counter++;
    current = current.next;
  }

  return counter;
}

function internalSum(firstNode, secondNode) {
  let result = 0;
  if (firstNode.next) {
    result = internalSum(firstNode.next, secondNode.next);
  }
  const amount = firstNode.data + secondNode.data + result;

  firstNode.data = amount % 10;
  return Math.floor(amount / 10);
}

export function sum(firstList, secondList) {
  const firstSize = getListSize(firstList);
  const secondSize = getListSize(secondList);

  const longList = firstSize > secondSize ? firstList : secondList;
  const shortList = firstSize > secondSize ? secondList : firstList;

  let currentLong = longList.head;
  let currentShort = shortList.head;
  while (currentLong) {
    if(!currentShort) {
      shortList.prepend(0);
    }
    currentShort = currentShort ? currentShort.next : null;
    currentLong = currentLong.next;
  }

  const remainder = internalSum(firstList.head, secondList.head);
  if (remainder) {
    firstList.prepend(0);
  }

  return firstList;
}
