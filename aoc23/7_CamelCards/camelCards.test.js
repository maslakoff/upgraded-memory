import { puzzleInput, testInput } from './camelCards.input.js';
import {
  getHandType,
  getTotalWinnings,
  getWinningHand
} from './camelCards.js';

describe('What are the total winnings?', () => {

  describe('getHandType', () => {
    const inputMap = [
      { hand: '23456', result: 'High card' },
      { hand: '32T3K', result: 'One pair' },
      { hand: 'KK677', result: 'Two pair', },
      { hand: 'KTJJT', result: 'Two pair' },
      { hand: 'T55J5', result: 'Three of a kind', },
      { hand: 'QQQJA', result: 'Three of a kind' },
      { hand: 'KKKAA', result: 'Full house' },
      { hand: 'KKKKA', result: 'Four of a kind' },
      { hand: 'KKKKK', result: 'Five of a kind' },
    ];

    test.each(inputMap)('getHandType %s', ({ hand, result}) => {
      expect(getHandType(hand)).toEqual(result);
    })
  });

  describe('getWinningHand', () => {
    const inputMap = [
      { hand1: '33332', hand2: '2AAAA', winningHand: '33332' },
      { hand1: '77888', hand2: '77788', winningHand: '77888' },
      { hand1: '32T3K', hand2: 'QQQJA', winningHand: 'QQQJA' },
      { hand1: 'KK677', hand2: 'QQQJA', winningHand: 'QQQJA' },
      { hand1: 'KK677', hand2: 'KTJJT', winningHand: 'KK677' },
      { hand1: 'T55J5', hand2: 'QQQJA', winningHand: 'QQQJA' },
      { hand1: 'T55J5', hand2: '32T3K', winningHand: 'T55J5' },
    ];

    test.each(inputMap)('getWinningHand %s', ({ hand1, hand2, winningHand}) => {
      expect(getWinningHand(hand1, hand2)).toEqual(winningHand);
    })
  });

  describe('inputs', () => {
    test('test input', () => {
      expect(getTotalWinnings(testInput)).toEqual(6440);
    });
    test('puzzle input', () => {
      expect(getTotalWinnings(puzzleInput)).toEqual(250347426);
    });
  })
});

describe('What are the new total winnings with joker?', () => {
  describe('getHandTypeWithJoker', () => {
    const inputMap = [
      { hand: '23456', result: 'High card' },
      { hand: '32T3K', result: 'One pair' },
      { hand: 'KK677', result: 'Two pair', },
      { hand: 'KTJJT', result: 'Four of a kind' },
      { hand: 'T55J5', result: 'Four of a kind', },
      { hand: 'QQQJA', result: 'Four of a kind' },
      { hand: 'QJJQ2', result: 'Four of a kind' },
      { hand: 'JKKK2', result: 'Four of a kind' },
      { hand: 'KKKAA', result: 'Full house' },
      { hand: 'KKKKA', result: 'Four of a kind' },
      { hand: 'KKKKK', result: 'Five of a kind' },
    ];

    test.each(inputMap)('getHandType %s', ({ hand, result}) => {
      expect(getHandType(hand, true)).toEqual(result);
    })
  });

  describe('getWinningHandWithJoker', () => {
    const inputMap = [
      { hand1: 'JKKK2', hand2: 'QQQQ2', winningHand: 'QQQQ2' },
      { hand1: '32T3K', hand2: 'KK677', winningHand: 'KK677' },
      { hand1: 'KK677', hand2: 'T55J5', winningHand: 'T55J5' },
      { hand1: 'KTJJT', hand2: 'T55J5', winningHand: 'KTJJT' },
      { hand1: 'T55J5', hand2: 'QQQJA', winningHand: 'QQQJA' },
      { hand1: 'KTJJT', hand2: 'QQQJA', winningHand: 'KTJJT' },
    ];

    test.each(inputMap)('getWinningHand with Joker %s', ({ hand1, hand2, winningHand}) => {
      expect(getWinningHand(hand1, hand2, true)).toEqual(winningHand);
    })
  });

  describe('inputs', () => {
    test('test input', () => {
      expect(getTotalWinnings(testInput, true)).toEqual(5905);
    });
    test('puzzle input', () => {
      expect(getTotalWinnings(puzzleInput, true)).toEqual(251224870);
    });
  })
});
