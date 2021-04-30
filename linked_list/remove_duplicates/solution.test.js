import { removeDuplicates, removeDuplicatesBuffer } from './solution';
import LinkedList from "../_implementation/LinkedList";

const populate = (linkedList) => {
  linkedList.append('Hi')
  linkedList.append(',')
  linkedList.append('my')
  linkedList.append(',')
  linkedList.append('name')
  linkedList.append('is')
  linkedList.append('is')
  linkedList.append('is')
  linkedList.append(',')
  linkedList.append('is')
  linkedList.append('Igor')
  linkedList.append('is')
  return linkedList;
}

const positiveResult = ['Hi', ',', 'my', 'name', 'is', 'Igor'];


test('removeDuplicatesBuffer positive cases', () => {
  const linkedList = populate(new LinkedList());
  const uniqueItemsList = removeDuplicatesBuffer(linkedList);
  const uniqueItemsArray = uniqueItemsList.toArray().map(item => item.data);
  expect(uniqueItemsArray).toEqual(positiveResult);
});

test('removeDuplicates positive cases', () => {
  const linkedList = populate(new LinkedList());
  const uniqueItemsList = removeDuplicates(linkedList);
  const uniqueItemsArray = uniqueItemsList.toArray().map(item => item.data);
  expect(uniqueItemsArray).toEqual(positiveResult);
});
