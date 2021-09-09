//* Rock Paper Sissors script

// create function for computerPlay
function computerPlay () {
  // generate a random number between 0 and 1
  let randomNum = Math.random()

  // declare variable to hold computer choice
  let computerChoice

  // assign a choice based on value of random number
  if (randomNum <= 0.333) {
    let computerChoice = 'Rock'
  } else if (randomNum >= 0.334 && randomNum < 0.666) {
    let computerChoice = 'Paper'
  } else if (randomNum >= 0.666) {
    let computerChoice = 'Sissors'
  }

  // return the result
  return computerChoice
}

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function gameRound () {
  let roundResult

  // create variable to hold player choice, get input via prompt, convert to lowercase
  let playerInput = prompt('Rock, Paper or Sissors?')
  let playerLowerCase = playerInput.toLowerCase()
  let playerChoice = capitalizeFirstLetter(playerLowerCase)

  // call the computerPlay function to assign value for computer choice
  let computerChoice = computerPlay()

  // logic to determine winner of round
  if (
    ((computerChoice == 'Rock') && (playerChoice == 'Paper')) ||
    ((computerChoice == 'Paper') && (playerChoice == 'Sissors')) ||
    ((computerChoice == 'Sissors') && (playerChoice == 'Rock'))
  ) {
    let roundResult = console.log(
      `${playerChoice} beats ${computerChoice}, you win this round!`
    )
  } else if (
    ((computerChoice == 'Rock') && (playerChoice == 'Sissors')) ||
    ((computerChoice == 'Paper') && (playerChoice == 'Rock')) ||
    ((computerChoice == 'Sissors') && (playerChoice == 'Paper'))
  ) {
    let roundResult = console.log(
      `${computerChoice} beats ${playerChoice}, you lose this round!`
    )
  }

  return roundResult 
}
