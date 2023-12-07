import {
  isGameSubSetPossible,
  isGameSetPossible,
  countPossibleGamesScore,
  getGameScore,
  getGamePower
} from './cubeConundrum.js';

describe('What is the sum of the IDs of those games?', () => {
  const gameSubSets = [
    { set: '3 blue, 4 red', result: true },
    { set: '1 red, 2 green, 6 blue', result: true },
    { set: '2 green', result: true },
    { set: '8 green, 6 blue, 20 red', result: false },
    { set: '5 blue, 4 red, 13 green', result: true },
    { set: '5 green, 1 red', result: true },
    { set: '1 green, 3 red, 6 blue', result: true },
    { set: '3 green, 6 red', result: true },
    { set: '3 green, 15 blue, 14 red', result: false },
  ]

  test.each(gameSubSets)('isGameSetPossible(%s) should be correct', ({ set, result }) => {
    expect(isGameSubSetPossible(set)).toEqual(result)
  })

  const gameSets = [
    { set: '3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green', result: true},
    { set: '1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue', result: true},
    { set: '8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red', result: false},
    { set: '1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red', result: false},
    { set: '6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green', result: true},
  ];

  test.each(gameSets)('gameSets(%s) should be correct', ({ set, result }) => {
    expect(isGameSetPossible(set)).toEqual(result);
  })

  const gameScores = [
    { gameTitle: 'Game 1', result: 1 },
    { gameTitle: 'Game 2', result: 2 },
    { gameTitle: 'Game 33', result: 33 },
    { gameTitle: 'Game 123', result: 123 },
  ];

  test.each(gameScores)('gameScores(%s) should be correct', ({ gameTitle, result }) => {
    expect(getGameScore(gameTitle)).toEqual(result);
  })

  test('countPossibleGamesScore should be valid', () => {
    const game = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;
    expect(countPossibleGamesScore(game)).toEqual(8);
  });

})

describe('What is the sum of the power of these sets?', () => {
  const gameSets = [
    { set: '3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green', result: 48},
    { set: '1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue', result: 12},
    { set: '8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red', result: 1560},
    { set: '1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red', result: 630},
    { set: '6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green', result: 36},
  ];

  test.each(gameSets)(`getGamePower(%s) should`, ({ set, result }) => {
    expect(getGamePower(set)).toEqual(result);
  })
})
