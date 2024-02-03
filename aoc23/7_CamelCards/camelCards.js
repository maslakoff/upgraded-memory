const handTypes = {
  HIGH_CARD: 'High card',
  ONE_PAIR: 'One pair',
  TWO_PAIR: 'Two pair',
  THREE_OF_A_KIND: 'Three of a kind',
  FULL_HOUSE: 'Full house',
  FOUR_OF_A_KIND: 'Four of a kind',
  FIVE_OF_A_KIND: 'Five of a kind',
}

const handTypesRate = [
  handTypes.HIGH_CARD,
  handTypes.ONE_PAIR,
  handTypes.TWO_PAIR,
  handTypes.THREE_OF_A_KIND,
  handTypes.FULL_HOUSE,
  handTypes.FOUR_OF_A_KIND,
  handTypes.FIVE_OF_A_KIND,
];

const cardsRate = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'T',
  'J',
  'Q',
  'K',
  'A',
];

const cardsWithJokerRate = [
  'J',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'T',
  'Q',
  'K',
  'A',
];


export const getTotalWinnings = (textInput, withJoker = false) => {
  const handsAndBids = getHandsAndBids(textInput).sort((hand1, hand2) => {
    const winningHand = getWinningHand(hand1.hand, hand2.hand, withJoker);
    if (winningHand === hand1.hand) {
      return 1;
    }
    if (winningHand === hand2.hand) {
      return -1;
    }
    return 0;
  });

  let result = 0;
  for (let i = 0; i < handsAndBids.length; i++) {
    const rank = i + 1;
    result += rank * handsAndBids[i].bid;
  }
  return result;
}

export const getHandType = (hand, withJoker = false) => {
  const cardsCounter = {};
  const cards = hand.split('');
  cards.forEach(card => {
    if (cardsCounter[card]) {
      cardsCounter[card] += 1;
    } else {
      cardsCounter[card] = 1;
    }
  });


  if (withJoker && cardsCounter['J'] && cardsCounter['J'] !== 5) {
    const jokerPretendToBeCard = getCardJokerPretendToBe({ ...cardsCounter });
    const jokerCount = cardsCounter['J'];
    delete cardsCounter['J'];
    cardsCounter[jokerPretendToBeCard] += jokerCount;
  }

  const cardVariationsCount = Object.keys(cardsCounter).length;

  switch (cardVariationsCount) {
    case 1:
      return handTypes.FIVE_OF_A_KIND;
    case 2:
      const [firstCardType, secondCardType] = Object.values(cardsCounter);
      if (firstCardType === 4 || secondCardType === 4) {
        return handTypes.FOUR_OF_A_KIND;
      }
      return handTypes.FULL_HOUSE;
    case 3: {
      const [firstCardType, secondCardType, thirdCardType] = Object.values(cardsCounter);
      if (firstCardType === 3 || secondCardType === 3 || thirdCardType === 3) {
        return handTypes.THREE_OF_A_KIND;
      }
    }
      return handTypes.TWO_PAIR;
    case 4:
      return handTypes.ONE_PAIR;
    case 5:
      return handTypes.HIGH_CARD
    default:
      break;
  }
}

const getCardJokerPretendToBe = (cardsCounter) => {
  delete cardsCounter['J'];
  const sorted = Object.keys(cardsCounter).map(key => [key, cardsCounter[key]]).sort((a, b) => b[1] - a[1]);
  return sorted[0][0];
};


export const getWinningHand = (hand1, hand2, withJoker = false) => {
  const hand1Type = getHandType(hand1, withJoker);
  const hand2Type = getHandType(hand2, withJoker);
  if (handTypesRate.indexOf(hand1Type) === handTypesRate.indexOf(hand2Type)) {
    const hand1Cards = hand1.split('');
    const hand2Cards = hand2.split('');
    for (let i = 0; i < hand1Cards.length; i++) {
      let usedCardsRate = withJoker ? cardsWithJokerRate : cardsRate;
      const hand1CardRate = usedCardsRate.indexOf(hand1Cards[i]);
      const hand2CardRate = usedCardsRate.indexOf(hand2Cards[i]);
      if (hand1CardRate > hand2CardRate) {
        return hand1;
      } else if (hand2CardRate > hand1CardRate) {
        return hand2;
      }
    }
  } else if (handTypesRate.indexOf(hand1Type) > handTypesRate.indexOf(hand2Type)) {
    return hand1;
  }

  return hand2;
}

const getHandsAndBids = textInput => {
  const lines = textInput.split(/\r?\n/);
  const handsAndBids = [];
  lines.forEach(line => {
    const [hand, bid] = line.split(/\s+/);
    handsAndBids.push({
      hand,
      bid: Number(bid),
    });
  })
  return handsAndBids;
};

