export default function sortByFrequency(data) {

  const counter = data.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1
    return acc
  }, {});

  const sortFunction = (a, b) => counter[b] - counter[a];

  return Object.keys(counter).sort(sortFunction);
}
