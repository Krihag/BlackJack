import randomCard from "./randomCard.js";
import cardDetails from "./cardDetails/cardDetails.js";

export default function createCard(player) {
  const card = {};

  const [cardNumber, cardSuit] = randomCard();

  [card.name, card.suit, card.value, card.srcName] = cardDetails(
    cardNumber,
    cardSuit
  );

  player.cards.push(card);
  return card;
}
