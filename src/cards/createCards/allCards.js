import createCard from "./createCard.js";

function allCards() {
  let allCards = [];

  //Getting all cards and pushing into AllCards array.
  for (let i = 1; i <= 13; i++) {
    for (let j = 0; j < 4; j++) {
      let card = createCard(i, j);
      allCards.push(card);
    }
  }
  return allCards;
}

export default allCards;
