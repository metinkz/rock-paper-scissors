function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function startRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie.";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "Player wins!";
  } else {
    return "Computer wins!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "What is your choice? (rock/paper/scissors)"
    );
    const computerSelection = getComputerChoice();
    const result = startRound(playerSelection, computerSelection);

    if (result === "Computer wins!") {
      computerScore++;
    } else if (result === "Player wins!") {
      playerScore++;
    }
  }

  console.log(
    `Final score | Computer: ${computerScore}, Player: ${playerScore}.`
  );

  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins the game!");
  }
}

game();
