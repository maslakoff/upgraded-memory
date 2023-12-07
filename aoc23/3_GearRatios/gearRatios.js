import { puzzleInput } from './gearRatios.input.js';

export const isDigit = (char) => {
  return /^\d$/.test(char);
}

export const isSymbol = (char) => {
  return !isDigit(char) && !isDelimiter(char);
}

export const isDelimiter = (char) => {
  return char === '.';
}

export const isStar = (char) => {
  return char === '*';
}

export const hasAdjacentSymbolInPosition = (i, j, matrix) => {
  let neighbours = [
    matrix[i][j-1],
    matrix[i][j+1],
  ];
  if (matrix[i-1]) {
    neighbours = [
      ...neighbours,
      matrix[i-1][j-1],
      matrix[i-1][j],
      matrix[i-1][j+1],
    ]
  }
  if (matrix[i+1]) {
    neighbours = [
      ...neighbours,
      matrix[i+1][j+1],
      matrix[i+1][j],
      matrix[i+1][j-1],
    ]
  }

  neighbours = neighbours.filter(char => char !== undefined);

  return neighbours.some(char => isSymbol(char));
}

export const getMatrixFromSchema = (schema) => {
  const lines = schema.split(/\r?\n/).map(line => line.trim());
  return  lines.map(line => line.split(''));
}

export const getEngineSum = (schema) => {
  let result = 0;
  const lines = schema.split(/\r?\n/).map(line => line.trim());
  const matrix = getMatrixFromSchema(schema);
  for(let i = 0; i < matrix.length; i++) {
    const line = matrix[i];
    for(let j = 0; j < line.length; j++) {
      const char = line[j];
      if (isDigit(char)) {
        let sequenceOfNumbersInLine = '';
        let startOfSequenceIndex = j;
        let endOfSequenceIndex = j;
        while (line[endOfSequenceIndex] && isDigit(line[endOfSequenceIndex])) {
          sequenceOfNumbersInLine += line[endOfSequenceIndex];
          endOfSequenceIndex++;
        }
        j = endOfSequenceIndex;
        endOfSequenceIndex = endOfSequenceIndex - 1; // to compensate ++ operation in while loop

        // console.log(`line ${i}, number: ${sequenceOfNumbersInLine}, range ${startOfSequenceIndex}:${endOfSequenceIndex}`)
        for (let k=startOfSequenceIndex; k <= endOfSequenceIndex; k++) {
          const hasSymbol = hasAdjacentSymbolInPosition(i, k, matrix);
          if (hasSymbol) {
            // console.log(k, hasSymbol)
            result += Number(sequenceOfNumbersInLine);
            break;
          }
        }
      }
    }
  }
  return result;
}

const getLeftDigitsSequenceAtPosition = (i, j, matrix) => {
  let sequence = '';
  let k = j-1;
  while (k >= 0 && isDigit(matrix[i][k])) {
    sequence = matrix[i][k] + sequence;
    k--;
  }
  return sequence;
}

const getRightDigitsSequenceAtPosition = (i, j, matrix) => {
  let sequence = '';
  let k = j+1;
  while (k <= matrix[i].length && isDigit(matrix[i][k])) {
    sequence = sequence + matrix[i][k];
    k++;
  }
  return sequence;
}

const getLineNumbers = (i, j, matrix) => {
  let numbers = [];
  if (matrix[i]) { // has top line
    if (isDigit(matrix[i][j])) { // top
      let sequence =
        getLeftDigitsSequenceAtPosition(i, j, matrix) +
        matrix[i][j] +
        getRightDigitsSequenceAtPosition(i, j, matrix);
      numbers.push(Number(sequence));
    } else {
      if (isDigit(matrix[i][j-1])) { // top left
        const sequence = getLeftDigitsSequenceAtPosition(i, j-1, matrix) + matrix[i][j-1];
        numbers.push(Number(sequence));
      }

      if (isDigit(matrix[i][j+1])) { // top right
        const sequence = matrix[i][j+1] + getRightDigitsSequenceAtPosition(i, j+1, matrix);
        numbers.push(Number(sequence));
      }
    }
  }

  return numbers;
}

export const getGearNumbers = (i, j, matrix) => {
  let numbers = [];

  if (!isStar(matrix[i][j])) {
    return [];
  }

  if (matrix[i][j-1] && isDigit(matrix[i][j-1])) { // left
    const sequence =  getLeftDigitsSequenceAtPosition(i, j-1, matrix) + matrix[i][j-1];
    numbers.push(Number(sequence));
  }

  if (matrix[i][j+1] && isDigit(matrix[i][j+1])) { // right
    const sequence =  matrix[i][j+1] + getRightDigitsSequenceAtPosition(i, j+1, matrix);
    numbers.push(Number(sequence));
  }

  const topLineNumber = getLineNumbers(i-1, j, matrix);
  const bottomLineNumbers = getLineNumbers(i+1, j, matrix);
  numbers = [...topLineNumber, ...numbers, ...bottomLineNumbers];


  return numbers;
}

export const getGearRatioSum = (schema) => {
  let result = 0;
  const matrix = getMatrixFromSchema(schema);
  for(let i = 0; i < matrix.length; i++) {
    const line = matrix[i];
    for (let j = 0; j < line.length; j++) {
      if (isStar(line[j])) {
        const numbers = getGearNumbers(i, j, matrix);
        const isGear = numbers.length === 2;
        if (isGear) {
          result += numbers[0] * numbers[1];
        }
      }
    }
  }
  return result;
}

// console.log(getEngineSum(puzzleInput));
