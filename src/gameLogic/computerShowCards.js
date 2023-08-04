const cardsContainer = document.querySelector(".cards-computer");

export default function computerShowCards(computer) {
  const img = cardsContainer.children[1];
  img.src = "../../images/" + computer.cards[1].name + ".png";
}
