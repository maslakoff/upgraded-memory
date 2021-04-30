import isCyclicShift from './solution';

test('positive cases', () => {
  expect(isCyclicShift('erbottlewat', 'waterbottle')).toBe(true);
  expect(isCyclicShift('aterbottlew', 'waterbottle')).toBe(true);
  expect(isCyclicShift('ewaterbottl', 'waterbottle')).toBe(true);
});

test('isCyclicShift negative cases', () => {
});
