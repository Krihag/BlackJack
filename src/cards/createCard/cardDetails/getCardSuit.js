export default function getCardSuit(cardSuit) {
  if (cardSuit === 0) return "Clubs";
  else if (cardSuit === 1) return "Diamonds";
  else if (cardSuit === 2) return "Hearts";
  else return "Spades";
}
