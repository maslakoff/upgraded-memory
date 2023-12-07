import { getKElementFromEnd } from './solution';
import LinkedList from "../_implementation/LinkedList.";

const populate = (linkedList) => {
  linkedList.append('Hi')
  linkedList.append(',')
  linkedList.append('my')
  linkedList.append('name')
  linkedList.append('is')
  linkedList.append('Igor')
  return linkedList;
}

test('positive cases', () => {
  const linkedList = populate(new LinkedList());
  const my = getKElementFromEnd(linkedList, 1)
  const igor = getKElementFromEnd(linkedList, 0)
  expect(my.data).toEqual('is');
  expect(igor.data).toEqual('Igor');
});
