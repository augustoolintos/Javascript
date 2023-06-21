'use strict';

// Variables --------------------------------------------------------------------------
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// ------------------------------------------------------------------- end of Variables

/* Functions */ // --------------------------------------------------------------------
// Function -> Display Message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Function -> Lose the Game
const loseTheGame = function () {
  displayMessage('☠ You lost the game!');
  document.querySelector('.title').textContent = 'The Number was:';
  document.querySelector('.score').textContent = 0;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#b34747';
  document.querySelector('.number').style.width = '30rem';
};

// Function -> Set Score
const setScore = function () {
  score--;
  document.querySelector('.score').textContent = score;
};
// ------------------------------------------------------------------- end of Functions

// Check Button -----------------------------------------------------------------------
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(
    'secret: ',
    secretNumber,
    ', guess: ',
    guess,
    ' --- check button'
  );

  // No number was input --------------------------------------------------------------
  if (!guess) {
    displayMessage('⛔ No number!');

    // Guess is close to the right number ---------------------------------------------
  } else if (
    guess === secretNumber - 2 ||
    guess === secretNumber - 1 ||
    guess === secretNumber + 2 ||
    guess === secretNumber + 1
  ) {
    if (score > 1) {
      displayMessage('😶 You are close!');
      setScore();
    } else {
      loseTheGame();
    }

    // Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low');
      setScore();
    } else {
      loseTheGame();
    }

    // Player wins --------------------------------------------------------------------
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
}); // ------------------------------------------------------------ end of Check Button

// Again Button -----------------------------------------------------------------------
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  Number((document.querySelector('.guess').value = ''));
  document.querySelector('.title').textContent = 'Guess My Number!';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  console.log('secret: ', secretNumber, ' --- again button');
}); // ------------------------------------------------------------ end of Again Button
