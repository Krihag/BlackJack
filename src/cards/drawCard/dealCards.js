import drawCard from "./drawCard.js";
import displayCard from "./displayCard.js";

export default function dealCards(players) {
  players.forEach((player) => {
    if (player.cards.length == 0) {
      player.cards.push(drawCard());
      player.cards.push(drawCard());

      player.cards.forEach((card, i) => {
        card._name = card.name;
        if (player.name == "Computer" && i === 1) {
          card._name = "back";
          console.log(card._name);
        }
        displayCard(player.cardContainer, card._name);
      });
    }
  });

  //   displayCard(player, card1.name);
  //   displayCard(player, card2.name);
}
