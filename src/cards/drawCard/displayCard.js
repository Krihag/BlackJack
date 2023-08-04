export default function displayCard(playerContainer, cardName) {
  const img = document.createElement("img");

  img.src = "../../images/" + cardName + ".png";
  playerContainer.append(img);
}
