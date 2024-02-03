// import { describe, expect, test } from "bun:test";
import {
  getBackExtrapolatedValuesSum,
  getExtrapolatedValuesSum,
  getNextNumberInSequence,
  getPreviousNumberInSequence
} from './mirage.js';
import { puzzleInput, testInput } from './mirage.input.js';

describe('What is the sum of these extrapolated values?', () => {
  describe('find next in sequence', () => {
    const inputResultMap = [
      { input: [0, 3, 6, 9, 12, 15], result: 18 },
      { input: [1, 3, 6, 10, 15, 21], result: 28 },
      { input: [10, 13, 16, 21, 30, 45], result: 68 },
    ]

   test.each(inputResultMap)('getNextNumberInSequence %s', ({ input, result }) => {
    expect(getNextNumberInSequence(input)).toEqual(result);
   });
  });

  describe('puzzle input', () => {
    test('test input', () => {
      expect(getExtrapolatedValuesSum(testInput)).toEqual(114);
    });
    test('puzzle input', () => {
      expect(getExtrapolatedValuesSum(puzzleInput)).toEqual(1684566095);
    });
  })
})

describe('What is the sum of these back extrapolated values?', () => {
  describe('find next in sequence', () => {
    const inputResultMap = [
      { input: [0, 3, 6, 9, 12, 15], result: -3 },
      { input: [1, 3, 6, 10, 15, 21], result: 0 },
      { input: [10, 13, 16, 21, 30, 45], result: 5 },
    ]

    test.each(inputResultMap)('getPreviousNumberInSequence %s', ({ input, result }) => {
      expect(getPreviousNumberInSequence(input)).toEqual(result);
    });
  });

  describe('puzzle input', () => {
    test('test input', () => {
      expect(getBackExtrapolatedValuesSum(testInput)).toEqual(2);
    });
    test('puzzle input', () => {
      expect(getBackExtrapolatedValuesSum(puzzleInput)).toEqual(1136);
    });
  })
})
