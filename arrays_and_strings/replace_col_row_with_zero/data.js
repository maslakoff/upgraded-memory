const filledData = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

const singleZero = [
  [ 1,  0,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

const singleZeroResult = [
  [ 0,  0,  0,  0,  0],
  [ 6,  0,  8,  9, 10],
  [11,  0, 13, 14, 15],
  [16,  0, 18, 19, 20],
];

const singleZeroResultError = [
  [ 0,  0,  0,  0,  0],
  [ 6,  0,  8,  9, 10],
  [11,  0, 0, 14, 15],
  [16,  0, 18, 19, 20],
];

const multipleZero = [
  [ 1,  0,  3,  4,  5],
  [ 6,  7,  0,  9, 10],
  [11, 12, 13,  0, 15],
  [16, 17, 18, 19, 20],
];

const multipleZeroResult = [
  [ 0,  0,  0,  0,  0],
  [ 0,  0,  0,  0,  0],
  [ 0,  0,  0,  0,  0],
  [16,  0,  0,  0, 20],
];

const multipleZeroResultError = [
  [ 0,  0,  0,  0,  0],
  [ 0,  0,  0,  0,  0],
  [ 0,  0,  0,  0,  0],
  [16,  0,  0,  0, 0],
];

export {
  filledData,
  multipleZero,
  multipleZeroResult,
  multipleZeroResultError,
  singleZero,
  singleZeroResult,
  singleZeroResultError,
}
