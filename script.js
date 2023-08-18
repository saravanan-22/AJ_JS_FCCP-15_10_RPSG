let choices = document.querySelectorAll(".choices button");
let resultElement = document.getElementById("result");

let playerChoice;

function getPlayerChoice(choice) {
  playerChoice = choice;
  playGame();
}

function playGame() {
  let computerChoice = getComputerChoice();
  let result = getResult(playerChoice, computerChoice);
  displayResult(playerChoice, computerChoice, result);
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getResult(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function displayResult(player, computer, result) {
  resultElement.textContent = `Player: ${player} vs Computer: ${computer}. ${result}`;
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    getPlayerChoice(choice.id);
  });
});
