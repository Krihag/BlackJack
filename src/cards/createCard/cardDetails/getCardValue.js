export default function getCardValue(cardNumber) {
  if (cardNumber === 1) return [11, 1];
  if (cardNumber > 10) return [10];
  else return [cardNumber];
}
