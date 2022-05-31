function computer() {
  let move = Math.floor(Math.random() * 3) + 1;
  return (move == 3) ? "Rock" : (move == 2) ? "Paper" : "Scissors"
}

let userMove = "PAPER" //prompt("?").toUpperCase();

function RPS(usr, comp) {
  if (usr == "ROCK") {
      if (comp == "ROCK") {
        return "It's a tie!"
      } else if (comp == "PAPER") {
        return "You lose! Paper beats Rock"
      } else {
        return "You win! Rock beats Scissors"
      }
    } else if (usr == "PAPER") {
      if (comp == "ROCK") {
        return "You win! Paper beats Rock"
      } else if (comp == "PAPER") {
        return "It's a tie!";
      } else {
        return "You lose! Scissors beat Paper"
      }
    } else if (usr == "SCISSORS") {
      if (comp == "ROCK") {
        return "You lose! Rock beats Scissors"
      } else if (comp == "PAPER") {
        return "You win! Scissors beat Paper"
      } else {
        return "It's a tie!";
      }
    } else {
      return "Error babe :/"
  }
}

function game() {
  let userScore = 0;
  let computerScore = 0;
  let roundsNum = 5;
  for (let x = 1; x <= roundsNum; x++) {
    let result = RPS(userMove, computer().toUpperCase());
    if (result.includes("You win!")) {
      userScore++
    } else if (result.includes("You lose!")) {
      computerScore++
    }
    console.log(result)
    console.log(userScore + "       " + computerScore)
  }
  let userToComp =  userScore + " to " + computerScore
  return (userScore > computerScore) ? 'You won! ' + userToComp : (userScore < computerScore) ? 'You lost this one :/ ' + userToComp : "It's a tie"
}