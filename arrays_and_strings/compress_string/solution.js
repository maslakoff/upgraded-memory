export default function compressString(initial) {
  const data = initial.split('');
  let result = '';
  let count = 0;
  let symbol = data[0];

  data.forEach(item => {
    if (item === symbol) {
      count++;
    } else {
      result += `${symbol}${count}`;
      count = 1;
      symbol = item;
    }
  });

  result += `${symbol}${count}`;

  if (initial.length <= result.length) {
    result = initial;
  }
  return result;
}
console.log(compressString('aabcccccaaa'))
