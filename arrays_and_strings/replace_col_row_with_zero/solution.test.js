import replaceWithZero from './solution';
import {
  filledData,
  multipleZero,
  multipleZeroResult,
  multipleZeroResultError,
  singleZero,
  singleZeroResult,
  singleZeroResultError,
} from './data';

test('positive cases', () => {
  expect(replaceWithZero(filledData)).toEqual(filledData);
  expect(replaceWithZero(singleZero)).toEqual(singleZeroResult);
  expect(replaceWithZero(multipleZero)).toEqual(multipleZeroResult);
});

test('negative cases', () => {
  expect(replaceWithZero(singleZero)).not.toEqual(singleZeroResultError);
  expect(replaceWithZero(multipleZero)).not.toEqual(multipleZeroResultError);
});
