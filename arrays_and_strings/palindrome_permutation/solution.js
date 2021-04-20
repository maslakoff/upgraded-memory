export default function isPalindromePermutation(str) {
  const data = str.replace(/ /g, '').toLowerCase().split('');
  const counter = {};

  data.forEach((item) => {
    if (counter[item]) {
      counter[item] += 1;
    } else {
      counter[item] = 1;
    }
  });

  let result = Object.values(counter).filter((i) => i % 2 !== 0);

  return result.length <= 1;
}
