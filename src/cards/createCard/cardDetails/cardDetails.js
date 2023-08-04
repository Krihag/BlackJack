import getCardName from "./getCardName.js";
import getCardSuit from "./getCardSuit.js";
import getCardValue from "./getCardValue.js";
import getImageSrc from "./getImageSrc.js";

export default function cardDetails(cardNumber, cardSuit) {
  const name = getCardName(cardNumber);
  const suit = getCardSuit(cardSuit);
  const value = getCardValue(cardNumber);
  const srcName = getImageSrc(name, suit);

  return [name, suit, value, srcName];
}
