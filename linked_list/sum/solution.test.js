import { reversedSum, sum } from './solution';
import LinkedList from '../_implementation/LinkedList';

const list1 = new LinkedList();
list1.append(7);
list1.append(1);
list1.append(6);

const list2 = new LinkedList();
list2.append(5);
list2.append(9);
list2.append(2);

const list3 = new LinkedList();
list3.append(7);
list3.append(1);
list3.append(6);
list3.append(1);

const list4 = new LinkedList();
list4.append(7);
list4.append(1);
list4.append(9);

test('reversedSum positive cases', () => {
  const data = reversedSum(list1, list2).toArray().map(element => element.data);
  expect(data).toEqual([2, 1, 9]);

  const data2 = reversedSum(list3, list2).toArray().map(element => element.data);
  expect(data2).toEqual([2, 1, 9, 1]);

  const data3 = reversedSum(list1, list4).toArray().map(element => element.data);
  expect(data3).toEqual([4, 3, 5, 1]);
});

const list6 = new LinkedList();
list6.append(6);
list6.append(1);
list6.append(7);
list6.append(3);

const list7 = new LinkedList();
list7.append(2);
list7.append(9);
list7.append(5);

test('sum positive cases', () => {
  const data = sum(list6, list7).toArray().map(element => element.data);
  expect(data).toEqual([6, 4, 6, 8]);
});
