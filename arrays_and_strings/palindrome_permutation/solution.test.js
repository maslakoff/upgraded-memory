const isPalindromePermutation = require('./solution');

test('isPalindromePermutation positive cases', () => {
  expect(isPalindromePermutation('Tact Coa')).toBe(true);
  expect(isPalindromePermutation('Tact aa Coa')).toBe(true);
  expect(isPalindromePermutation('taco cat')).toBe(true);
  expect(isPalindromePermutation('atco cta')).toBe(true);
});

test('isPalindromePermutation negative cases', () => {
  expect(isPalindromePermutation('Tactofo Coa')).toBe(false);
  expect(isPalindromePermutation('Tfct Coa')).toBe(false);
});
