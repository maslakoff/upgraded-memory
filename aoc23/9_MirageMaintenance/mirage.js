const getSubSequence = (sequence) => {
  let subSequence = [];
  for (let i = sequence.length - 1; i > 0; i--) {
    subSequence = [sequence[i] - sequence[i -1 ], ...subSequence];
  }

  return subSequence;
}

const hasNonZeroElements =  (sequence) => {
  return sequence.some(number => number !== 0);
}

const getSubSequencesTillAllZero = (sequence) => {
  const subSequences = [];
  let subSequenceInput = sequence;
  while (hasNonZeroElements(subSequenceInput)) {
    subSequenceInput = getSubSequence(subSequenceInput);
    subSequences.push(subSequenceInput);
  }
  return subSequences;
}

export const getNextNumberInSequence = (sequence) => {
  const subSequences = getSubSequencesTillAllZero(sequence);
  let nextNumber = 0;
  for (let i = subSequences.length - 1; i > 0; i--) {
    // const subSequence = subSequences[i];
    // const lasNumber = subSequence[subSequence.length - 1];
    const higherSequence = subSequences[i - 1];
    nextNumber = nextNumber + higherSequence[higherSequence.length - 1];
  }
  return sequence[sequence.length - 1] + nextNumber;
}

const convertTextInputToArrayOfSequences = (textInput) => {
  const lines = textInput.split(/\r?\n/);
  return lines.map(line => {
    return line.split(/\s+/).map(Number);
  });
}

export const getExtrapolatedValuesSum = (textInput) => {
  const sequences = convertTextInputToArrayOfSequences(textInput);
  let result = 0;
  sequences.forEach(sequence => {
    result += getNextNumberInSequence(sequence);
  });

  return result;
}

export const getPreviousNumberInSequence = (sequence) => {
  const subSequences = getSubSequencesTillAllZero(sequence);
  let nextNumber = 0;
  for (let i = subSequences.length - 1; i > 0; i--) {
    // const subSequence = subSequences[i];
    // const lasNumber = subSequence[subSequence.length - 1];
    const higherSequence = subSequences[i - 1];
    nextNumber = higherSequence[0] - nextNumber;
  }
  return sequence[0] - nextNumber;
}

export const getBackExtrapolatedValuesSum = (textInput) => {
  const sequences = convertTextInputToArrayOfSequences(textInput);
  let result = 0;
  sequences.forEach(sequence => {
    result += getPreviousNumberInSequence(sequence);
  });

  return result;
}
