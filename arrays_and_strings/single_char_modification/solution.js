export default function singleCharModification(initial, mutated) {

  const initialData = initial.split('');
  const mutatedData = mutated.split('');

  if (initial.length === mutated.length) {
    let diffs = 0;
    initialData.forEach((item, index) => {
      const char = mutated.charAt(index);
      if (item !== char) {
        diffs++
      }
    });

    return diffs <= 1;
  }

  if(initial.length - mutated.length > 1 || initial.length - mutated.length < -1) {
    return false;
  }

  const longData = initialData.length > mutatedData.length ? initialData : mutatedData;
  const shortData = longData === mutatedData ? initialData : mutatedData;

  let longIndex = 0;

  let diffs = 0;
  shortData.forEach((item) => {
    let char = longData[longIndex];
    if (item !== char) {
      diffs++;
      longIndex++;
      char = longData[longIndex]
      if(item !== char) {
        diffs++;
      }
    }
    longIndex++;

  })

  return diffs <= 1;
}


console.log(singleCharModification('pale', 'pale'))
