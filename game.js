function computer() {
  let move = Math.floor(Math.random() * 3) + 1;
  return (move == 3) ? "Rock" : (move == 2) ? "Paper" : "Scissors"
}
let userMove = "PAPER" //prompt("?").toUpperCase();
let computerMove = computer().toUpperCase();

function RPS(usr, comp) {
  if (usr == "ROCK") {
      if (comp == "ROCK") {
        console.log("It's a tie!");
      } else if (comp == "PAPER") {
        console.log("You lose! Paper beats Rock")
      } else {
        console.log("You win! Rock beats Scissors")
      }
    } else if (usr == "PAPER") {
      if (comp == "ROCK") {
        console.log("You win! Paper beats Rock")
      } else if (comp == "PAPER") {
        console.log("It's a tie!");
      } else {
        console.log("You lose! Scissors beat Paper")
      }
    } else {
      if (comp == "ROCK") {
        console.log("You lose! Rock beats Scissors")
      } else if (comp == "PAPER") {
        console.log("You win! Scissors beat Paper")
      } else {
        console.log("It's a tie!333");
      }
  }
}