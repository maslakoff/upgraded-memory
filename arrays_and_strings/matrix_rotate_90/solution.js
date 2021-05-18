export default function matrixRotate90(initial) {
  const result = [];

  for(let i = 0; i < initial.length; i++) {
    const data = [];
    for(let j = 0; j < initial.length; j++) {
      data.push(initial[j][i])
    }
    result.push(data.reverse())
  }

  return result;
}

function getRandomPixel() {
  return Math.floor(Math.random() * 256);
}

function pixel(x, y) {
  return [`${x}${y}`, getRandomPixel(), getRandomPixel(), getRandomPixel()]
}


const data = [
  [pixel(0, 1), pixel(0, 2), pixel(0, 3),  pixel(0, 4),  pixel(0, 5)],
  [pixel(1, 1), pixel(1, 2), pixel(1, 3),  pixel(1, 4),  pixel(1, 5)],
  [pixel(2, 1), pixel(2, 2), pixel(2, 3),  pixel(2, 4),  pixel(2, 5)],
  [pixel(3, 1), pixel(3, 2), pixel(3, 3),  pixel(3, 4),  pixel(3, 5)],
  [pixel(4, 1), pixel(4, 2), pixel(4, 3),  pixel(4, 4),  pixel(4, 5)],
];

console.log('init', data);
console.log('-------------------------------');
const result = matrixRotate90(data);

console.log('res', result);
