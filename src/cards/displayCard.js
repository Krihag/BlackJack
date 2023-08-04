import delay from "../gameLogic/delay.js";

export default async function displayCard(player, card) {
  const img = document.createElement("img");
  img.src = `../../images/${card.srcName}.png`;
  player.cardContainer.append(img);
}
