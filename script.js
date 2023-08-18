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
  displayResult(playerChoice, computerChoice, result)
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




// HTML Structure: The game seems to have an HTML structure where there are buttons representing different choices (rock, paper, scissors) and an element to display the game result.

// Event Listeners: The code uses a forEach loop to add click event listeners to each of the choice buttons. When a button is clicked, the getPlayerChoice function is invoked with the id of the clicked button as an argument. This helps determine the player's choice.

// getPlayerChoice Function: This function is called when a choice button is clicked. It takes the ID of the clicked button as an argument and assigns it to the playerChoice variable. This function then calls the playGame function.

// playGame Function: This function is responsible for playing a round of the game. It first calls the getComputerChoice function to generate a random computer choice (rock, paper, or scissors). Then, it calls the getResult function with both the player's and computer's choices to determine the result. Finally, it calls the displayResult function to show the outcome to the player.

// getComputerChoice Function: This function generates a random index between 0 and 2 to select a random choice from the choices array (rock, paper, or scissors). It then returns the randomly chosen computer choice.

// getResult Function: This function takes in the player's choice and the computer's choice as arguments and compares them to determine the result of the game (tie, player win, or computer win). It uses a series of conditional statements to make this determination.

// displayResult Function: This function takes the player's choice, computer's choice, and the result as arguments, and updates the textContent of the resultElement to display the game's outcome.

// Overall Flow: The code sets up event listeners for the choice buttons, allowing players to click their desired choice. When a choice is clicked, the player's choice is stored, and the game is played by generating a computer choice, calculating the result, and displaying it to the player.