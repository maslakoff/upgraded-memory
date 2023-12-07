export const testSpeed = (() => {
  const codeVariants = Array.from({ length: 25 }, (_, i) => ({
    number: i + 1,
    value: Math.floor(Math.random() * 1001),
  })).reduce((acc, o) => ((acc[o.number] = o.value), acc), {});

  console.group('Code speeds');
  console.log(codeVariants);
  console.groupEnd();
  return (arr) => {
    if (arr.length !== 5 || arr.some((v) => !Number.isInteger(v))) {
      throw TypeError('Array must contain 5 integers.');
    }
    if (new Set(arr).size !== arr.length) {
      throw TypeError('Array must contain different integers.');
    }
    if (arr.some((v) => v > 25 || v < 1)) {
      throw TypeError('Array must contain integers in range [1, 25].');
    }
    return arr
      .map((number) => ({ number, value: codeVariants[number] }))
      .sort((a, b) => a.value - b.value)
      .map((o) => o.number);
  };
})();
