// buttons
const btnRock = document.getElementById('rockButton');
const btnPaper = document.getElementById('paperButton');
const btnScissors = document.getElementById('scissorsButton');

// paragraphs
const paraComputerArr = document.getElementById('pComputerArr');
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
  // displays computers pick (element) instead of an array
  function getObjectKeyName(arr) {
    let str = arr.join('');
    for (let i in arrs) {
      let objValue = arrs[i].join('');
      if (objValue == str) return i
    }
  }
  paraComputerArr.textContent = getObjectKeyName(computerPick);
  paraComputerArr.style.cssText = 'opacity: 1; color: black'

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

let userScore = 0;
let computerScore = 0;

const spanUser = document.querySelector('#spanUserScore');
spanUser.textContent = userScore;

const spanComputer = document.querySelector('#spanComputerScore');
spanComputer.textContent = computerScore;

const btns = document.querySelectorAll('.choice');
const hFinalScore = document.getElementById('hFinalScore');


//counts the score and determines if user won/lost
let btnsClick = 0;
btns.forEach((button) => button.addEventListener('click', () => {
  btnsClick++;
  if (hOneRoundVerdict.textContent.includes('you win')) {
    userScore++;
    spanUser.textContent = userScore;
    
  } else if (hOneRoundVerdict.textContent.includes('you lose')) {
    computerScore++;
    spanComputer.textContent = computerScore;
  }
  if (userScore >= 5 || computerScore >=5) {
    if (userScore > computerScore) {
    hFinalScore.textContent = 'YOU WON!'
    hFinalScore.style.color = '#ED1A68'
  } else if (userScore === computerScore) {
    hFinalScore.textContent = "IT'S A TIE!"
    hFinalScore.style.color = '#FFC700'
  } else {
    hFinalScore.textContent = 'YOU LOST!'
    hFinalScore.style.color = '#EC401B'
  } btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    btnRock.style.opacity = '0.5';
    btnPaper.style.opacity = '0.5';
    btnScissors.style.opacity = '0.5';
    btnReset.disabled = false;
    btnReset.style.opacity = '1'
  }
  // imgs get bigger when chosen
  let buttonsId = button.getAttribute('id');
  let img = document.querySelector(`img#${buttonsId}`);
  img.classList.toggle('imgChosenElement');
}));

// reset button
const btnReset = document.getElementById('resetButton');
btnReset.disabled = true;
btnReset.style.opacity = '0.5'

btnReset.addEventListener('click', () => {
  // disable/enable buttons
  btnRock.disabled = false;
  btnScissors.disabled = false;
  btnPaper.disabled = false;
  btnReset.disabled = true;
  btnReset.style.opacity = '0.5'
  btnRock.style.opacity = '1';
  btnPaper.style.opacity = '1';
  btnScissors.style.opacity = '1';
  // reverses texts
  paraComputerArr.textContent = 'pick first to find out';
  paraComputerArr.style.cssText = 'color: var(--fontGray); opacity: 0.32;'
  hOneRoundVerdict.textContent = 'who will win the first round?'
  hFinalScore.textContent = 'WHO IS THE WINNER?'
  hFinalScore.style.color = '#F09E00'
  // reverses user counting system
  userScore = 0;
  spanUser.textContent = userScore;
  computerScore = 0;
  spanComputer.textContent = computerScore;
  btnsClick = 0;
  
})


// add footer
// animate chosen elements