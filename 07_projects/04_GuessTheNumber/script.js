let randomNumber = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#submit");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const loOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const form = document.querySelector("form");
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);

    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid guess number");
  } else if (guess < 0 || guess > 100) {
    alert("please enter a number between 1 to 100");
  } else {
    // prevGuess.push(guess)
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMesssage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMesssage("You guessed it right");
  } else if (guess < randomNumber) {
    displayMesssage("Number is Too Low");
  } else if (guess > randomNumber) {
    displayMesssage("Number is Too High");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerText += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMesssage(message) {
  loOrHi.innerText = message;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
  startOver.appendChild(p)
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p)
    playGame = true;
  });
}
