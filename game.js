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
paraUserScore.textContent = `your score: ${userScore}`;
paraComputerScore.textContent = `computer score: ${computerScore}`

const btns = document.querySelectorAll('.choice');
const hFinalScore = document.getElementById('hFinalScore');

//counts the score and determines if user won/lost
let btnsClick = 0;
btns.forEach((button) => button.addEventListener('click', () => {
  btnsClick++;
  if (hOneRoundVerdict.textContent.includes('you win')) {
    userScore++;
    paraUserScore.textContent = `your score: ${userScore}`;
    
  } else if (hOneRoundVerdict.textContent.includes('you lose')) {
    computerScore++;
    paraComputerScore.textContent = `computer score: ${computerScore}`
  }
  if (userScore >= 5 || computerScore >=5) {
    if (userScore > computerScore) {
    hFinalScore.textContent = 'You won!!!'
  } else if (userScore === computerScore) {
    hFinalScore.textContent = 'a tie!!!'
  } else {
    hFinalScore.textContent = 'you lost!!!'
  } btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    btnReset.disabled = false;
  }
  
}));

// reset button
const btnReset = document.getElementById('resetButton');
btnReset.disabled = true;

btnReset.addEventListener('click', () => {
  btnRock.disabled = false;
  btnScissors.disabled = false;
  btnPaper.disabled = false;
  btnReset.disabled = true;
  paraComputerArr.textContent = 'pick first to find out';
  hOneRoundVerdict.textContent = 'who will win the first round?'
  userScore = 0;
  computerScore = 0;
  paraUserScore.textContent = `your score: ${userScore}`;
  paraComputerScore.textContent = `computer score: ${computerScore}`;
  btnsClick = 0;
  hFinalScore.textContent = 'WHO IS THE WINNER?'
})


// user score has different colors
// footer
// animate chosen element
// score to desplay 3