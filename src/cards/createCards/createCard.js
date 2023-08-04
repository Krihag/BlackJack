import checkCardType from "./checkCardType.js";
import cardValue from "./cardValue.js";
import fullCardName from "./fullCardName.js";

export default function createCard(numberValue, numberType) {
  let value = cardValue(numberValue);
  let type = checkCardType(numberType);
  let name = fullCardName(numberValue, type);

  let card = {
    value: value,
    type: type,
    name: name,
    canChangeValue: false,
  };
  if (card.value === 11) card.canChangeValue = true;

  return card;
}
