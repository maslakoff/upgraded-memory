import LinkedList from '../_implementation/LinkedList.js';

export function removeDuplicatesBuffer(list) {
  const buffer = [];
  const result = new LinkedList();

  let current = list.head;

  while (current) {
    const { data } = current;
    if (!buffer.includes(data)) {
      buffer.push(data);
      result.append(data);
    }
    current = current.next;
  }

  return result;
}

export function removeDuplicates(list) {

  let current = list.head;
  while (current) {
    let internalCurrent = current;
    while (internalCurrent) {
      if (internalCurrent.next && current.data === internalCurrent.next.data) {
        internalCurrent.next = internalCurrent.next.next;
      } else {
        internalCurrent = internalCurrent.next;
      }
    }

    current = current.next;

  }

  return list;
}
