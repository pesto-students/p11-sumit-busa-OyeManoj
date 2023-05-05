// Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guessCount = 0;
    let guess;
  
    while (guessCount < totalGuesses) {
      if (guessCount === 0) {
        guess = prompt("Enter a number between 1 and 100.");
      } else if (guess < numToGuess) {
        guess = prompt(guess + " is too small. Guess a larger number.");
      } else if (guess > numToGuess) {
        guess = prompt(guess + " is too large. Guess a smaller number.");
      }
  
      if (guess === null) {
        return 0;
      } else if (guess === "" || isNaN(guess)) {
        alert("Please enter a number.");
        continue;
      } else {
        guessCount++;
        guess = Number(guess);
        if (guess === numToGuess) {
          return guessCount;
        }
      }
    }
  
    return 0;
  }