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
          
        } else {
          
        }
      } else if (userMove == "Paper") {
        if (computerMove == "Rock") {
          
        } else if (computerMove == "Paper") {
          console.log("It's a tie!");
        } else {
          
        }
      } else {
        if (computerMove == "Rock") {
          
        } else if (computerMove == "Paper") {
          
        } else {
          console.log("It's a tie!");
        }
      }
}