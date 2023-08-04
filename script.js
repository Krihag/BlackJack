import restartGame from "./src/gameLogic/restartGame.js";
import startGame from "./src/gameLogic/startGame.js";
import playerDrawsCard from "./src/players/playerDrawsCard.js";
import players from "./src/players/players.js";
import stopDrawCard from "./src/players/stopDrawCard.js";

const dealCardsBtn = document.querySelector(".deal-cards");
const drawCardOption = document.querySelector(".draw-card");
const stopCardOption = document.querySelector(".stop-card");
const newGameBtn = document.querySelector(".new-game-btn");

dealCardsBtn.addEventListener("click", startGame.bind(null, players));
drawCardOption.addEventListener("click", playerDrawsCard.bind(null, players));
stopCardOption.addEventListener("click", stopDrawCard.bind(null, players));
newGameBtn.addEventListener("click", restartGame.bind(null, players));
