export const getScratchcardsPointSum = (cardsText) => {
  const cards = cardsText.split(/\r?\n/);
  let sum = 0
  cards.forEach(card => {
    const [, cardText] = card.split(': ');
    const [winningText, numbersText] = cardText.split(/\s+\|\s+/);
    const winningNumbers = winningText.trim().split(/\s+/).map(Number);
    const cardNumbers = numbersText.trim().split(/\s+/).map(Number);
    const matchedNumbers = getMatchedNumbers(winningNumbers, cardNumbers);
    const points = getPoints(matchedNumbers.length);
    sum += points;
  });
  return sum;
}

export const getMatchedNumbers = (winningNumbers, cardNumbers) => {
  let matchedNumbers = [];
  winningNumbers.forEach(winningNumber => {
    if (cardNumbers.includes(winningNumber)) {
      matchedNumbers.push(winningNumber);
    }
  })
  return matchedNumbers;
}

export const getPoints = (number) => {
  if (number === 0) {
    return 0;
  }
  let result = 1;
  for (let i = 1; i < number; i++) {
    result = result * 2;
  }
  return result;
}

export const getTotalScratchcardsCount = (cardsText) => {
  const cards = {};
  const cardLines = cardsText.split(/\r?\n/);

  cardLines.forEach(card => {
    const [cardTitle, cardText] = card.split(/:\s+/);
    const [winningText, numbersText] = cardText.split(/\s+\|\s+/);
    const winningNumbers = winningText.trim().split(/\s+/).map(Number);
    const cardNumbers = numbersText.trim().split(/\s+/).map(Number);
    const [,cardNumber] = cardTitle.split(/\s+/);
    cards[Number(cardNumber)] = {
      winningNumbers,
      cardNumbers,
      count: 1,
      matchedNumbers: getMatchedNumbers(winningNumbers, cardNumbers),
    }
  });

  Object.keys(cards).forEach(cardKey => {
    const card = cards[cardKey];
    const { matchedNumbers, count } = card;
    const wonCopiesCount = matchedNumbers.length;
    if (wonCopiesCount > 0) {
      const nextKey = Number(cardKey) + 1;
      for (let i = nextKey; i < nextKey + wonCopiesCount; i++) {
        if (cards[i]) {
          cards[i].count = cards[i].count + count;
        }
      }
    }
  });

  return Object.keys(cards).reduce((acc, cardKey) => acc + cards[cardKey].count, 0);
}
