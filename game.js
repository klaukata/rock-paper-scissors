function computer() {
    let move = Math.floor(Math.random() * 3) + 1;
    return (move == 3) ? "Rock" : (move == 2) ? "Paper" : "Scissors"
}

function RPS() {
    let userMove = prompt("?").toUpperCase();
    let computerMove = computer().toUpperCase();
    if (computerMove == "Rock") {
        if (userMove == "Rock") {
          
        } else if (userMove == "Paper") {
          
        } else {
          
        }
      } else if (computerMove == "Paper") {
        if (userMove == "Rock") {
          
        } else if (userMove == "Paper") {
          
        } else {
          
        }
      } else {
        if (userMove == "Rock") {
          
        } else if (userMove == "Paper") {
          
        } else {
          
        }
      }
}