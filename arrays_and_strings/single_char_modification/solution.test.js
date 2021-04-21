import mutatedSorted from './solution';

test('positive cases', () => {
  expect(mutatedSorted('pale', 'ple')).toBe(true);
  expect(mutatedSorted('pales', 'pale')).toBe(true);
  expect(mutatedSorted('pale', 'bale')).toBe(true);
  expect(mutatedSorted('pale', 'pales')).toBe(true);
});

test('negative cases', () => {
  expect(mutatedSorted('pale', 'bake')).toBe(false);
  expect(mutatedSorted('pale', 'paless')).toBe(false);
  expect(mutatedSorted('aaaa', 'bbbb')).toBe(false);
  expect(mutatedSorted('aaaa', 'abba')).toBe(false);
});
