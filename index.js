const readline = require('readline');

// Pick a whole number from 1 to 100.
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Set up terminal input and output.
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForGuess() {
  input.question('Guess a number between 1 and 100: ', (answer) => {
    const guess = Number(answer);
    attempts += 1;

    if (guess === secretNumber) {
      console.log('Correct!');
      console.log(`Total attempts: ${attempts}`);
      input.close();
    } else {
      if (guess > secretNumber) {
        console.log('Too high');
      } else {
        console.log('Too low');
      }

      askForGuess();
    }
  });
}

askForGuess();