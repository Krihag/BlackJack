export default function randomCard() {
  const cardNumber = Math.floor(Math.random() * 13) + 1;
  const cardSuit = Math.floor(Math.random() * 4);
  return [cardNumber, cardSuit];
}
