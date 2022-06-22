// buttons
const btnRock = document.getElementById('rockButton');
const btnPaper = document.getElementById('paperButton');
const btnScissors = document.getElementById('scissorsButton');

// paragraphs
const paraComputerArr = document.getElementById('pComputerArr') // ?
const hOneRoundVerdict = document.getElementById('hOneRoundVerdict');

const arrs = {
  rock: [1,0,0],
  paper: [0,1,0],
  scissors: [0,0,1]
}

// individual event listeners
btnRock.addEventListener('click', () => {onClick(arrs.rock)});
btnPaper.addEventListener('click', () => {onClick(arrs.paper)});
btnScissors.addEventListener('click', () => {onClick(arrs.scissors)});

// executes when a user clicks a button
let onClick = function(userPick) {
  // creates a random computer pick
  function convertChoiceToArr() { 
    let randomNum = Math.floor(Math.random() * 3);
    return (randomNum === 0) ? [1,0,0] : (randomNum === 1) ? [0,1,0] : [0,0,1];
  }
  let computerPick = convertChoiceToArr();
  function getObjectKeyName(arr) {
    let str = arr.join('');
    for (let i in arrs) {
      let objValue = arrs[i].join('');
      if (objValue == str) return i
    }
  }
  paraComputerArr.textContent = getObjectKeyName(computerPick); // ?
  hOneRoundVerdict.textContent = determineWhoWonARound(userPick, computerPick);
}

const obj = {
  0: 'rock',
  1: 'paper',
  2: 'scissors'
}

function determineWhoWonARound(usr, comp) {
  let usrIndex = usr.indexOf(1);
  let compIndex = comp.indexOf(1);
  if ((compIndex + 1 == usrIndex) || (usrIndex === 0 && compIndex === 2)) {
    if (obj[usrIndex] == 'scissors') return `you win! ${obj[usrIndex]} beat ${obj[compIndex]}`
    return `you win! ${obj[usrIndex]} beats ${obj[compIndex]}`
  } else if (usrIndex == compIndex) {
    return "it's a tie!"
  } else {
    if (obj[compIndex] == 'scissors') return `you lose! ${obj[compIndex]} beat ${obj[usrIndex]}`
    return `you lose! ${obj[compIndex]} beats ${obj[usrIndex]}`
  }
}

const paraUserScore = document.getElementById('userScore')
const paraComputerScore = document.getElementById('computerScore')

let userScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll('.choice');
const hFinalScore = document.getElementById('hFinalScore');

//counts the score and determines if user won/lost
btns.forEach((button) => button.addEventListener('click', () => {
  if (hOneRoundVerdict.textContent.includes('you win')) {
    userScore++;
    paraUserScore.textContent = `user score: ${userScore}`
  } else if (hOneRoundVerdict.textContent.includes('you lose')) {
    computerScore++;
    paraComputerScore.textContent = `computer score: ${userScore}`
  }
  if (userScore > computerScore) {
    hFinalScore.textContent = 'You won!!!'
  } else if (userScore === computerScore) {
    hFinalScore.textContent = 'a tie!!!'
  } else {
    hFinalScore.textContent = 'you lost!!!'
  } 
}));


//reset button
//change default messages
// computer chose
// how many round to win
// block buttons when theres a winner