import sortByFrequency from './solution';
import { simpleInput, simpleOutput } from "./data";

test('sort by frequency positive cases', () => {
  expect(sortByFrequency(simpleInput)).toEqual(simpleOutput);
});

