import { getMultipliedWaysToBeatRecord, getWaysToBeatRecord, getWaysToBeatRecordFromPuzzleInput } from './wait.js';
import { puzzleInput, testInput } from './wait.input.js';

describe('number of ways you can beat the record', () => {
  const resultsMap = [
    { time: 7, distanceRecord: 9, waysToBeatRecord: 4, },
    { time: 15, distanceRecord: 40, waysToBeatRecord: 8, },
    { time: 30, distanceRecord: 200, waysToBeatRecord: 9, },
    { time: 71530, distanceRecord: 940200, waysToBeatRecord: 71503, },
  ];

  test.each(resultsMap)('getWaysToBeatRecord %s', ({ time, distanceRecord, waysToBeatRecord}) => {
    expect(getWaysToBeatRecord(time, distanceRecord)).toEqual(waysToBeatRecord);
  });

  describe('inputs', () => {
    test('test input', () => {
      expect(getMultipliedWaysToBeatRecord(testInput)).toEqual(288);
    });
    test('puzzle input', () => {
      expect(getMultipliedWaysToBeatRecord(puzzleInput)).toEqual(32076);
    });
    test('puzzle input as single values', () => {
      expect(getWaysToBeatRecordFromPuzzleInput(puzzleInput)).toEqual(34278221);
    });
  })

});
