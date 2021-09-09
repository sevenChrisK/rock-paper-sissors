//* Rock Paper Sissors script

// create function for computerPlay
function computerPlay () {
  // generate a random number between 0 and 1
  let randomNum = Math.floor(Math.random() * 100)

  let computerChoice

  // assign a choice based on value of random number
  if (randomNum <= 33) {
    computerChoice = 'Rock'
  } else if (randomNum >= 34 && randomNum < 66) {
    computerChoice = 'Paper'
  } else if (randomNum >= 66) {
    computerChoice = 'Sissors'
  }

  console.log('The computer chose: ' + computerChoice)
  return computerChoice
}

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function gameRound () {
  // create variable to hold player choice, get input via prompt, convert to lowercase
  let playerInput = prompt('Rock, Paper or Sissors?')
  let playerLowerCase = playerInput.toLowerCase()
  let playerChoice = capitalizeFirstLetter(playerLowerCase)

  // call the computerPlay function to assign value for computer choice
  let computerChoice = computerPlay()

  // logic to determine winner of round
  let roundResult
  let roundWinner
  if (
    (computerChoice == 'Rock' && playerChoice == 'Paper') ||
    (computerChoice == 'Paper' && playerChoice == 'Sissors') ||
    (computerChoice == 'Sissors' && playerChoice == 'Rock')
  ) {
    roundResult = console.log(
      `${playerChoice} beats ${computerChoice}, you win this round!`
    )
    roundWinner = 'Player'
    return roundWinner
  } else if (
    (computerChoice == 'Rock' && playerChoice == 'Sissors') ||
    (computerChoice == 'Paper' && playerChoice == 'Rock') ||
    (computerChoice == 'Sissors' && playerChoice == 'Paper')
  ) {
    roundResult = console.log(
      `${computerChoice} beats ${playerChoice}, you lose this round!`
    )
    roundWinner = 'Computer'
    return roundWinner
  } else if (computerChoice == playerChoice) {
    roundResult = console.log(
      `${playerChoice}...ha! you read my mind! this round is a draw!`
    )
    roundWinner = 'Draw'
    return roundWinner
  }
  return roundWinner
}

function game () {
  let computerWins = 0
  let playerWins = 0
  let drawnRounds = 0

  for (let i = 0; i < 5; i++) {
    let roundWinner = gameRound()
    if ((roundWinner == 'Computer')) {
      computerWins++
    } else if ((roundWinner == 'Player')) {
      playerWins++
    } else if ((roundWinner == 'Draw')) {
      drawnRounds++
    }
  }
  if (computerWins > playerWins) {
    console.log(
      `Computer won ${computerWins} rounds, you won ${playerWins} (${drawnRounds} drawn rounds) - better luck next time!`
    )
  } else if (playerWins > computerWins) {
    console.log(
      `Computer won ${computerWins} rounds, yet you won ${playerWins} (${drawnRounds} drawn rounds) - CONGRATULATIONS!`
    )
  } else if (playerWins == computerWins) {
    console.log('All draws! How irregular!')
  }
}
