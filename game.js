function computer() {
    let move = Math.floor(Math.random() * 3) + 1;
    return (move == 3) ? "Rock" : (move == 2) ? "Paper" : "Scissors"
}

function RPS() {
    let userMove = prompt("?").toUpperCase();
    let computerMove = computer().toUpperCase();
    if (userMove == "Rock") {
        if (computerMove == "Rock") {
            console.log("It's a tie!");
          } else if (computerMove == "Paper") {
            console.log("You lose! Paper beats Rock")
          } else {
            console.log("You win! Rock beats Scissors")
        }
      } 
      else if (userMove == "Paper") {
        if (computerMove == "Rock") {
            console.log("You win! Paper beats Rock")
          } else if (computerMove == "Paper") {
            console.log("It's a tie!");
          } else {
            console.log("You lose! Scissors beat Paper")
        }
      } 
      else {
        if (computerMove == "Rock") {
            console.log("You lose! Rock beats Scissors")
          } else if (computerMove == "Paper") {
            console.log("You win! Scissors beat Paper")
          } else {
            console.log("It's a tie!");
        }
      }
}