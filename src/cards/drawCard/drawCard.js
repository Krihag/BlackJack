import createCard from "../createCards/createCard.js";

export default function drawCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  let type = Math.floor(Math.random() * 4);

  return createCard(randomCard, type);
}
