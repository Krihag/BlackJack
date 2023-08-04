export default function getCardName(cardNumber) {
  if (cardNumber === 11) return "Jack";
  else if (cardNumber === 12) return "Queen";
  else if (cardNumber === 13) return "King";
  else if (cardNumber === 1) return "Ace";
  else return cardNumber;
}
