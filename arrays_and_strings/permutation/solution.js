export default function isPermutation(initial, mutated) {
  const initialArray = initial.split('').sort();
  const mutatedArray = mutated.split('').sort();

  return initialArray.join('') === mutatedArray.join('');
}
