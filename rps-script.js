let playerChoice;
//* Rock Paper Sissors script
let computerWins = 0;
let playerWins = 0;
let drawnRounds = 0;

const computerWinDisplay = document.querySelector("#computerScore");
const playerWinDisplay = document.querySelector("#yourScore");
const drawnRoundsDisplay = document.querySelector("#drawnRounds");

const playerChoiceDisplay = document.querySelector("#yourChoice");
const computerChoiceDisplay = document.querySelector("#computerChoice");
const roundResultDisplay = document.querySelector("#roundResult");

// create function for computerPlay
function computerPlay() {
  // generate a random number between 0 and 1
  let randomNum = Math.floor(Math.random() * 100);

  let computerChoice;

  // assign a choice based on value of random number
  if (randomNum <= 33) {
    computerChoice = "Rock";
  } else if (randomNum >= 34 && randomNum < 66) {
    computerChoice = "Paper";
  } else if (randomNum >= 66) {
    computerChoice = "Sissors";
  }

  computerChoiceDisplay.innerHTML = "The computer chose: " + computerChoice;
  return computerChoice;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function gameRound(e) {
  // call the computerPlay function to assign value for computer choice
  let computerChoice = computerPlay();

  // logic to determine winner of round

  let roundWinner;
  if (
    (computerChoice == "Rock" && playerChoice == "Paper") ||
    (computerChoice == "Paper" && playerChoice == "Sissors") ||
    (computerChoice == "Sissors" && playerChoice == "Rock")
  ) {
    roundResultDisplay.innerHTML = `${playerChoice} beats ${computerChoice}, you win this round!`;
    roundWinner = "Player";
    updateScore(roundWinner);
    return roundWinner;
  } else if (
    (computerChoice == "Rock" && playerChoice == "Sissors") ||
    (computerChoice == "Paper" && playerChoice == "Rock") ||
    (computerChoice == "Sissors" && playerChoice == "Paper")
  ) {
    roundResultDisplay.innerHTML = `${computerChoice} beats ${playerChoice}, you lose this round!`;
    roundWinner = "Computer";
    updateScore(roundWinner);
    return roundWinner;
  } else if (computerChoice == playerChoice) {
    roundResultDisplay.innerHTML = `${playerChoice}...ha! you read my mind! this round is a draw!`;
    roundWinner = "Draw";
    updateScore(roundWinner);
    return roundWinner;
  }
}

// function game () {
//   for (let i = 0; i < 5; i++) {
//     gameRound()
//   }
//   if (computerWins > playerWins) {
//     console.log(
//       `Computer won ${computerWins} rounds, you won ${playerWins} (${drawnRounds} drawn rounds) - better luck next time!`
//     )
//   } else if (playerWins > computerWins) {
//     console.log(
//       `Computer won ${computerWins} rounds, yet you won ${playerWins} (${drawnRounds} drawn rounds) - CONGRATULATIONS!`
//     )
//   } else if (computerWins == 1 && playerWins == 1) {
//     console.log('A draw! Close match...')
//   } else if (drawnRounds == 5) {
//     console.log('All draws! How irregular!')
//   } else if (computerWins == 2 && playerWins == 2) {
//     console.log('A draw! Close match...')
//   }

//   resetScore()
// }

// function resetScore () {
//   computerWins = 0
//   playerWins = 0
//   drawnRounds = 0
// }

function updateScore(roundWinner) {
  if (roundWinner == "Player") {
    playerWins++;
  } else if (roundWinner == "Computer") {
    computerWins++;
  } else if (roundWinner == "Draw") {
    drawnRounds++;
  }
  computerWinDisplay.innerText = computerWins;
  playerWinDisplay.innerText = playerWins;
  drawnRoundsDisplay.innerHTML = drawnRounds;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    playerChoiceDisplay.innerHTML = "You chose: " + button.id;
    playerChoice = button.id;
  });
  button.addEventListener("click", gameRound);
});
