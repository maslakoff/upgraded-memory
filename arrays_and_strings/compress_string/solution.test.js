import compressString from './solution';

test('positive cases', () => {
  expect(compressString('aabcccccaaa')).toBe('a2b1c5a3');
  expect(compressString('abcd')).toBe('abcd');
});

test('negative cases', () => {
});
