import checkUniqueLettersInString from './solution';

test('checkUniqueLettersInString positive cases', () => {
  expect(checkUniqueLettersInString('abc')).toBe(true);
  expect(checkUniqueLettersInString('usp')).toBe(true);
});

test('checkUniqueLettersInString negative cases', () => {
  expect(checkUniqueLettersInString('aaaa')).toBe(false);
  expect(checkUniqueLettersInString('abba')).toBe(false);
});
