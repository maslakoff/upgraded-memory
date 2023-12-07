import {
  getEngineSum, getGearNumbers, getGearRatioSum,
  getMatrixFromSchema,
  hasAdjacentSymbolInPosition,
  isDelimiter,
  isDigit, isStar,
  isSymbol
} from './gearRatios.js';
import { puzzleInput, testInput as schema } from './gearRatios.input.js';

describe('What is the sum of all of the part numbers in the engine schematic?', () => {
  it('test input', () => {
    expect(getEngineSum(schema)).toEqual(4361);
  });

  describe('test utils: isDigit', () => {
    const inputMap = [
      {char: '1', result: true},
      {char: 1, result: true},
      {char: '.', result: false},
      {char: '*', result: false},
      {char: '#', result: false},
    ]

    test.each(inputMap)('isDigit (%s)', ({char, result}) => {
      expect(isDigit(char)).toEqual(result)
    });
  });

  describe('test utils: isDelimiter', () => {
    const inputMap = [
      {char: '1', result: false},
      {char: 1, result: false},
      {char: '.', result: true},
      {char: '*', result: false},
      {char: '#', result: false},
    ]

    test.each(inputMap)('isDelimiter (%s)', ({char, result}) => {
      expect(isDelimiter(char)).toEqual(result)
    });
  });

  describe('test utils: isSymbol', () => {
    const inputMap = [
      {char: '1', result: false},
      {char: 1, result: false},
      {char: '.', result: false},
      {char: '*', result: true},
      {char: '#', result: true},
      {char: '$', result: true},
    ]

    test.each(inputMap)('isSymbol (%s)', ({char, result}) => {
      expect(isSymbol(char)).toEqual(result)
    });
  });

  describe('hasAdjacentSymbolInPosition', () => {
    const inputMap = [
      {i: 0, j: 0, result: false},
      {i: 0, j: 9, result: false},
      {i: 2, j: 3, result: true},
      {i: 9, j: 0, result: false},
      {i: 9, j: 9, result: false},
      {i: 6, j: 4, result: true},
      {i: 5, j: 7, result: false},
      {i: 5, j: 8, result: false},
      {i: 0, j: 5, result: false},
      {i: 0, j: 6, result: false},
      {i: 0, j: 7, result: false},
    ];

    const matrix = getMatrixFromSchema(schema);

    test.each(inputMap)('hasAdjacentSymbolInPosition (%s)', ({i, j, result}) => {
      expect(hasAdjacentSymbolInPosition(i, j, matrix)).toEqual(result);
    });
  });

  describe('puzzle input', () => {
    it('What is the sum of all of the part numbers in the engine schematic?', () => {
      expect(getEngineSum(puzzleInput)).toEqual(514969);
    });
  });
});

describe('What is the sum of all of the gear ratios in your engine schematic?', () => {
  describe('utils', () => {
    describe('test utils: isDigit', () => {
      const inputMap = [
        {char: '1', result: false},
        {char: 1, result: false},
        {char: '.', result: false},
        {char: '*', result: true},
        {char: '#', result: false},
      ]

      test.each(inputMap)('isStar (%s)', ({char, result}) => {
        expect(isStar(char)).toEqual(result)
      });

      describe('getGearNumbers', () => {
        const gearNumbersInputMap = [
          {i: 0, j: 0, result: []},
          {i: 1, j: 3, result: [467, 35]},
          {i: 4, j: 3, result: [617]},
          {i: 9, j: 0, result: []},
          {i: 8, j: 5, result: [755, 598]},
        ];

        const matrix = getMatrixFromSchema(schema);

        test.each(gearNumbersInputMap)('getGearNumbers (%s)', ({i, j, result}) => {
          expect(getGearNumbers(i, j, matrix).sort()).toEqual(result.sort());
        });

        it('check right number', () => {
          let rightNumberMatrix = [
            ['.', '.', '.', '.', '.'],
            ['.', '.', '*', '2', '3'],
            ['.', '.', '.', '.', '.'],
          ];
          expect(getGearNumbers(1, 2, rightNumberMatrix)).toEqual([23]);
        });

        it('check top numbers', () => {
          let topNumberMatrix = [
            ['1', '2', '.', '3', '4'],
            ['.', '.', '*', '.', '.'],
            ['.', '.', '.', '.', '.'],
          ];
          expect(getGearNumbers(1, 2, topNumberMatrix)).toEqual([34, 12].sort());
        });

        it('check top number', () => {
          let topNumberMatrix = [
            ['.', '2', '5', '6', '.'],
            ['.', '.', '*', '.', '.'],
            ['.', '.', '.', '.', '.'],
          ];
          expect(getGearNumbers(1, 2, topNumberMatrix)).toEqual([256].sort());
        });

        it('check bottom number', () => {
          let bottomNumberMatrix = [
            ['.', '.', '.', '.', '.'],
            ['.', '.', '*', '.', '.'],
            ['.', '2', '5', '6', '.'],
          ];
          expect(getGearNumbers(1, 2, bottomNumberMatrix)).toEqual([256].sort());
        });

        it('check bottom numbers', () => {
          let bottomNumberMatrix = [
            ['.', '.', '.', '.', '.'],
            ['.', '.', '*', '.', '.'],
            ['1', '2', '.', '6', '2'],
          ];
          expect(getGearNumbers(1, 2, bottomNumberMatrix)).toEqual([12, 62].sort());
        });
      })
    });


  });
  describe('What is the sum of all of the gear ratios in your engine schematic?', () => {
    it('test input', () => {
      expect(getGearRatioSum(schema)).toEqual(467835);
    });

    it('puzzleInput', () => {
      expect(getGearRatioSum(puzzleInput)).toEqual(78915902);
    });
  });
})



