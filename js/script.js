const guessedLetters = document.querySelector(".guessed-letters");
const guess = document.querySelector(".guess");
const userGuess = document.querySelector(".letter");
const wordIP = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetterArray = [];

// Hide the words with circle symbols
const hiddenWord = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    placeholderLetters.push("●");
  }
  wordIP.innerText = placeholderLetters.join("");
};

hiddenWord(word);

guess.addEventListener("click", function (e) {
  e.preventDefault();
  // Empty message 
  message.innerText = "";
  // Letter input from user
  const guess = userGuess.value;
  // Check if the input was one letter
  const goodGuess = validateInput(guess);

  if (goodGuess) {
    // Check if it's part of the word
    makeGuess(guess);
  }
  userGuess.value = "";
});

const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    message.innerText = "Please enter a letter.";
  } else if (input.length > 1) {
    message.innerText = "Please enter a single letter.";
  } else if (!input.match(acceptedLetter)) {
    message.innerText = "Please enter a letter from A to Z.";
  } else {
    return input;
  }
};

const makeGuess = function (letter) {
  letter = letter.toUpperCase();
  if (guessedLetterArray.includes(letter)) {
    message.innerText = "You already guessed that letter, silly. Try again.";
  } else {
    guessedLetterArray.push(letter);
    console.log(guessedLetterArray);
    showGuessedLetters();
    updateWordsIP(guessedLetterArray);
  }
};

const showGuessedLetters = function () {
  guessedLetters.innerHTML = "";
  for (const letter of guessedLetterArray) {
    const li = document.createElement("li");
    li.innerText = letter;
    guessedLetters.append(li);
  }
};

const updateWordsIP = function (guessedLetterArray) {
  const wordUpperCase = word.toUpperCase();
  const wordArray = wordUpperCase.split("");
  const revealWord = [];
  for (const letter of wordArray) {
    //If the guess is right then reveal it!
    if (guessedLetterArray.includes(letter)) {
      revealWord.push(letter.toUpperCase());
    //If not then keep it censored
    } else {
      revealWord.push("●");
    }
  }
  //Update the words in progress to the revealed word
  wordIP.innerText = revealWord.join("");
  //Check if all the letters are revealed
  checkIfWin();
};

const checkIfWin = function () {
  if (word.toUpperCase() === wordIP.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
  }
};