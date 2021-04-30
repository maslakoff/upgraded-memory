export default function isCycicShift(initial, shifted) {
  const twiceInitial = `${initial}${initial}`;
  return twiceInitial.includes(shifted);
}

