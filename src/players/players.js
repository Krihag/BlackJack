const player = document.querySelector(".cards-player");
const computer = document.querySelector(".cards-computer");

// const Player = {
//   name: "",
//   cards: [],
//   cardValue: 0,
//   numCards: 0,
//   totalWins: 0,
//   cardContainer: document.querySelector(".cards-player"),
// };

function Player(name, className) {
  (this.name = name),
    (this.cards = []),
    (this.score = 0),
    (this.numCards = 0),
    (this.totalWins = 0),
    (this.cardContainer = document.querySelector(className));
}

const player1 = new Player("Player 1", ".cards-player");
const player2 = new Player("Computer", ".cards-computer");

export default [player1, player2];
