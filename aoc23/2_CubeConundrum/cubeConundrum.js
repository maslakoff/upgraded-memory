import { puzzleInput } from './cubeConundrum.input.js';

const redCubesMaxAmount = 12;
const greenCubesMaxAmount = 13;
const blueCubesMaxAmount = 14;

const colorsMap = {
  red: redCubesMaxAmount,
  green: greenCubesMaxAmount,
  blue: blueCubesMaxAmount,
}

export const isGameSubSetPossible = (set) => {
  const subSets = set.split(', ');
  const setColorsMap = {};
  subSets.forEach(subSet => {
    const [amount, color] = subSet.split(' ');
    setColorsMap[color] = Number(amount);
  });

  const result = Object.keys(setColorsMap).some(colorInSet => {
    return setColorsMap[colorInSet] > colorsMap[colorInSet];
  })

  return !result;
}

export const isGameSetPossible = (gameInput) => {
  const subSets = gameInput.split('; ');

  const result = subSets.some(subSet => !isGameSubSetPossible(subSet));

  return !result;
}

export const getGameScore = (gameTitle) => {
  const [, score] = gameTitle.split(' ');
  return Number(score);
}

export const countPossibleGamesScore = (gamesInput) => {
  let result = 0;

  const games = gamesInput.split('\n');
  games.forEach(game => {
    const [gameTitle, gameInput] = game.split(': ');
    if (isGameSetPossible(gameInput)) {
      result += getGameScore(gameTitle);
    }
  });

  return result;
}

// console.log(countPossibleGamesScore(puzzleInput))

export const getGamePower = (gameInput) => {
  const minimalPossibleColorsMap = {};

  const gameSets = gameInput.split('; ');
  gameSets.forEach(gameSet => {
    const gameSubSet = gameSet.split(', ');
    gameSubSet.forEach(gameSubSet => {
      const [amount, color] = gameSubSet.split(' ');
      if (minimalPossibleColorsMap[color]) {
        if (minimalPossibleColorsMap[color] < Number(amount)) {
          minimalPossibleColorsMap[color] = Number(amount);
        }
      } else {
        minimalPossibleColorsMap[color] = Number(amount);
      }
    })
  })

  const { red, blue, green } = minimalPossibleColorsMap;
  return red * blue * green;
}

export const getGamesPower = (gamesInput) => {
  let result = 0;

  const games = gamesInput.split('\n');
  games.forEach(game => {
    const [, gameInput] = game.split(': ');
    const gamePower = getGamePower(gameInput);
    console.log(gameInput, gamePower)
    result += gamePower;
  })

  return result;
}

console.log(getGamesPower(puzzleInput))
