import { getMatchedNumbers, getPoints, getScratchcardsPointSum, getTotalScratchcardsCount } from './scratchcards.js';
import { puzzleInput, testInput } from './scratchcards.input.js';

describe('How many points are they worth in total?', () => {
  describe('utils', () => {
    describe('getPoints', () => {
      const testMap = [
        { numbers: 5, result: 16 },
        { numbers: 4, result: 8 },
        { numbers: 1, result: 1 },
        { numbers: 0, result: 0 },
      ];

      test.each(testMap)('getPoints %s', ({ numbers, result}) => {
        expect(getPoints(numbers)).toEqual(result);
      });
    });

    describe('getMatchedNumbers', () => {
      const testMap = [
        {
          winningNumbers: [41, 48, 83, 86, 17],
          cardNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
          result: [48, 83, 17, 86]
        },
        {
          winningNumbers: [13, 32, 20, 16, 61],
          cardNumbers: [61, 30, 68, 82, 17, 32, 24, 19],
          result: [32, 61]
        },
        {
          winningNumbers: [1, 21, 53, 59, 44],
          cardNumbers: [69, 82, 63, 72, 16, 21, 14, 1],
          result: [1, 21]
        },
        {
          winningNumbers: [41, 92, 73, 84, 69],
          cardNumbers: [59, 84, 76, 51, 58, 5, 54, 83],
          result: [84]
        },
        {
          winningNumbers: [87, 83, 26, 28, 32],
          cardNumbers: [88, 30, 70, 12, 93, 22, 82, 36],
          result: []
        },
        {
          winningNumbers: [31, 18, 13, 56, 72],
          cardNumbers: [74, 77, 10, 23, 35, 67, 36, 11],
          result: []
        },
      ];

      test.each(testMap)('getMatchedNumbers %s', ({ winningNumbers, cardNumbers, result}) => {
        expect(getMatchedNumbers(winningNumbers, cardNumbers).sort()).toEqual(result.sort());
      });
    });
  });
  describe('inputs', () => {
    test('testInput', () => {
      expect(getScratchcardsPointSum(testInput)).toEqual(13);
    });

    test('puzzleInput', () => {
      expect(getScratchcardsPointSum(puzzleInput)).toEqual(20667); // 39565 wrong
    });
  })
})

describe('how many total scratchcards do you end up with?', () => {
  describe('inputs', () => {
    test('testInput', () => {
      expect(getTotalScratchcardsCount(testInput)).toEqual(30);
    });

    test('puzzleInput', () => {
      expect(getTotalScratchcardsCount(puzzleInput)).toEqual(5833065);  //5833065
    });
  });
});
