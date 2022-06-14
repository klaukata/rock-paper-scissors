// console.log("------ROCK-PAPER-SCISSORS------")
// console.log("type 'game()' to start!")

// function computer() {
//   let move = Math.floor(Math.random() * 3) + 1;
//   return (move == 3) ? "Rock" : (move == 2) ? "Paper" : "Scissors"
// }

// function RPS(usr, comp) {
//   if (usr == "ROCK") {
//       if (comp == "ROCK") {
//         console.log("It's a tie!");
//         return "It's a tie!"
//       } else if (comp == "PAPER") {
//         console.log("You lose! Paper beats Rock");
//         return "You lose! Paper beats Rock"
//       } else {
//         console.log("You win! Rock beats Scissors");
//         return "You win! Rock beats Scissors"
//       }
//     } else if (usr == "PAPER") {
//       if (comp == "ROCK") {
//         console.log("You win! Paper beats Rock");
//         return "You win! Paper beats Rock"
//       } else if (comp == "PAPER") {
//         console.log("It's a tie!");
//         return "It's a tie!"
//       } else {
//         console.log("You lose! Scissors beat Paper");
//         return "You lose! Scissors beat Paper"
//       }
//     } else if (usr == "SCISSORS") {
//       if (comp == "ROCK") {
//         console.log("You lose! Rock beats Scissors");
//         return "You lose! Rock beats Scissors"
//       } else if (comp == "PAPER") {
//         console.log("You win! Scissors beat Paper");
//         return "You win! Scissors beat Paper"
//       } else {
//         console.log("It's a tie!");
//         return "It's a tie!"
//       }
//     } else {
//       return "Error babe :/"
//   }
// }

// function game() {
//   let userScore = 0;
//   let computerScore = 0;
//   let roundsNum = 5;
//   for (let x = 1; x <= roundsNum; x++) {
//     let result = RPS(prompt("What do you pick?").toUpperCase(), computer().toUpperCase());
//     alert(result);
//     if (result.includes("You win!")) {
//       userScore++
//     } else if (result.includes("You lose!")) {
//       computerScore++
//     }
//   }
//   let userToComp =  userScore + " to " + computerScore;
//   return (userScore > computerScore) ? 'You won! ' + userToComp : 
//       (userScore < computerScore) ? 'You lost this one :/ ' + userToComp : 
//       "It's a tie! " + userToComp
// }