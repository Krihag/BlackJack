import newCard from "../cards/newCard.js";
import computerShowCards from "./computerShowCards.js";

export default function ifComputerDraw(computer) {
  computerShowCards(computer);

  console.log(computer.score);
  while (computer.score < 17) newCard(computer);
}
