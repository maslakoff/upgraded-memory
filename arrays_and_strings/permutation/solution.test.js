import isPermutation from './solution';

test('isPermutation positive cases', () => {
  expect(isPermutation('aabcd', 'baacd')).toBe(true);
  expect(isPermutation('abc', 'bac')).toBe(true);
  expect(isPermutation('solution', 'olustion')).toBe(true);
});

test('isPermutation negative cases', () => {
  expect(isPermutation('aaaa', 'aaab')).toBe(false);
  expect(isPermutation('abc', 'avc')).toBe(false);
});
