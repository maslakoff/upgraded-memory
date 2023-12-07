import {
  getDestinationNumber,
  getFlatMapFromRange,
  getFullMapForSeed,
  getLowestLocationNumber, getLowestLocationNumberFromRange,
  getTextForMap
} from './seeds.js';
import { puzzleInput, testInput } from './seeds.input.js';

describe('What is the lowest location number that corresponds to any of the initial seed numbers?', () => {
  describe('getFlatMapFromRange', () => {
    const rangeText = `50 98 2
52 50 48`;

    const flatMap = getFlatMapFromRange(rangeText);

    const tests = [
      { seed: 0, soil: undefined, },
      { seed: 1, soil: undefined, },
      { seed: 14, soil: undefined, },
      { seed: 13, soil: undefined, },
      { seed: 48, soil: undefined, },
      { seed: 49, soil: undefined, },
      { seed: 50, soil: 52, },
      { seed: 51, soil: 53, },
      { seed: 55, soil: 57, },
      { seed: 79, soil: 81, },
      { seed: 96, soil: 98, },
      { seed: 97, soil: 99, },
      { seed: 98, soil: 50, },
      { seed: 99, soil: 51, },
      { seed: 101, soil: undefined, },
      { seed: 101010, soil: undefined, },
    ];

    test.each(tests)('getFlatMapFromRange %s', ({ seed, soil}) => {
      expect(flatMap[seed]).toEqual(soil);
    });
  });

  describe('getDestinationNumber', () => {
    const rangeText = `50 98 2
52 50 48`;

    const flatMap = getFlatMapFromRange(rangeText);

    const tests = [
      { seed: 0, soil: 0, },
      { seed: 1, soil: 1, },
      { seed: 14, soil: 14, },
      { seed: 13, soil: 13, },
      { seed: 48, soil: 48, },
      { seed: 49, soil: 49, },
      { seed: 50, soil: 52, },
      { seed: 51, soil: 53, },
      { seed: 55, soil: 57, },
      { seed: 79, soil: 81, },
      { seed: 96, soil: 98, },
      { seed: 97, soil: 99, },
      { seed: 98, soil: 50, },
      { seed: 99, soil: 51, },
      { seed: 101, soil: 101, },
      { seed: 101010, soil: 101010, },
    ];

    test.each(tests)('getDestinationNumber %s', ({ seed, soil}) => {
      expect(getDestinationNumber(flatMap, seed)).toEqual(soil);
    });
  });

  describe('getTextForMap', () => {
    test('seed-to-soil', () => {
      const seedToSoilMapText = `50 98 2
52 50 48`;
      expect(getTextForMap('seed-to-soil', testInput)).toEqual(seedToSoilMapText);
    });
    test('soil-to-fertilizer', () => {
      const soilToFertilizerMapText = `0 15 37
37 52 2
39 0 15`;
      expect(getTextForMap('soil-to-fertilizer', testInput)).toEqual(soilToFertilizerMapText);
    });
    test('humidity-to-location', () => {
      const humidityToLocationMapText = `60 56 37
56 93 4`;
      expect(getTextForMap('humidity-to-location', testInput)).toEqual(humidityToLocationMapText);
    });
  })

  describe('seeds test input', () => {
    test('seed 79', () => {
      expect(getFullMapForSeed(testInput, 79)).toEqual({ seed: 79, soil: 81, fertilizer: 81, water: 81, light: 74, temperature: 78, humidity: 78, location: 82 });
    });
    test('seed 14', () => {
      expect(getFullMapForSeed(testInput, 14)).toEqual({ seed: 14, soil: 14, fertilizer: 53, water: 49, light: 42, temperature: 42, humidity: 43, location: 43 });
    });
    test('seed 55', () => {
      expect(getFullMapForSeed(testInput, 55)).toEqual({ seed: 55, soil: 57, fertilizer: 57, water: 53, light: 46, temperature: 82, humidity: 82, location: 86 });
    });
    test('seed 13', () => {
      expect(getFullMapForSeed(testInput, 13)).toEqual({ seed: 13, soil: 13, fertilizer: 52, water: 41, light: 34, temperature: 34, humidity: 35, location: 35 });
    });
  });

  describe('inputs', () => {
    test('testInput', () => {
      const seeds = [79, 14, 55, 13];
      expect(getLowestLocationNumber(testInput, seeds)).toEqual(35);
    });
    test('puzzleInput', () => {
      const seeds = [1482445116, 339187393, 3210489476, 511905836, 42566461, 51849137, 256584102, 379575844, 3040181568, 139966026, 4018529087, 116808249, 2887351536, 89515778, 669731009, 806888490, 2369242654, 489923931, 2086168596, 82891253];
      expect(getLowestLocationNumber(puzzleInput, seeds)).toEqual(175622908); // wrong 42566461
    });
  })
});

describe('What is the lowest location number that corresponds to any of the initial seed numbers? ', () => {
  describe('inputs', () => {
    test('testInput', () => {
      const seedRanges = [
        { seedStart: 79, seedLength: 14 },
        { seedStart: 55, seedLength: 13 },
      ];
      expect(getLowestLocationNumberFromRange(testInput, seedRanges)).toEqual(46);
    });
    test('puzzleInput', () => {
      const seedRanges = [
        { seedStart: 1482445116, seedLength: 339187393 },
        { seedStart: 3210489476, seedLength: 511905836,},
        { seedStart: 42566461, seedLength: 51849137, },
        { seedStart: 256584102, seedLength: 379575844, },
        { seedStart: 3040181568, seedLength: 139966026, },
        { seedStart: 4018529087, seedLength: 116808249, },
        { seedStart: 2887351536, seedLength: 89515778, },
        { seedStart: 669731009, seedLength: 806888490, },
        { seedStart: 2369242654, seedLength: 489923931, },
        { seedStart: 2086168596, seedLength: 82891253, },
        ];
      expect(getLowestLocationNumberFromRange(puzzleInput, seedRanges)).toEqual(5200543); // wrong 42566461
    });
  })
})
