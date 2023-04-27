'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.between').textContent);
// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.label-score').textContent);
// console.log(document.querySelector('.label-highscore').textContent);
// console.log(document.querySelector('.number').textContent);

// Making the secret number random
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  Number((document.querySelector('.guess').value = ''));
  document.querySelector('.title').textContent = 'Guess My Number!';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  console.log(secretNumber, typeof guess, 'again button');
});

// Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(secretNumber, guess, typeof guess, 'check button');

  // No number was input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // Guess is close to the right number
  } else if (
    guess === secretNumber - 2 ||
    guess === secretNumber - 1 ||
    guess === secretNumber + 2 ||
    guess === secretNumber + 1
  ) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😶 You are close!';
      score--;
      document.querySelector('.score').textContent = score;

      // Lost the game
    } else {
      document.querySelector('.message').textContent = '☠ You lost the game!';
      document.querySelector('.title').textContent = 'The Number was:';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#b34747';
      document.querySelector('.number').style.width = '30rem';
    }

    // Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    // Showing the secret number
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;

      // Lost the game
    } else {
      document.querySelector('.message').textContent = '☠ You lost the game!';
      document.querySelector('.title').textContent = 'The Number was:';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#b34747';
      document.querySelector('.number').style.width = '30rem';
    }

    // Guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;

      // Lost the game
    } else {
      document.querySelector('.message').textContent = '☠ You lost the game!';
      document.querySelector('.title').textContent = 'The Number was:';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#b34747';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});
