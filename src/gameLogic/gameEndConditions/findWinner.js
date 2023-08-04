export default function findWinner(player, computer) {
  const playerScore = player.score;
  const compScore = computer.score;
  if (playerScore > 21 || compScore > 21) {
    if (playerScore > 21 && compScore > 21) {
      return "Its a draw";
    } else if (playerScore > 21) {
      computer.totalWins++;
      return "Computer Wins!";
    } else {
      player.totalWins++;
      return "Player Wins!";
    }
  } else if (playerScore === compScore) {
    return "Its a draw";
  } else if (playerScore < compScore) {
    computer.totalWins++;
    return "Computer Wins!";
  } else {
    player.totalWins++;
    return "Player Wins!";
  }
}
