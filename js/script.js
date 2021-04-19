const guessedLetters = document.querySelector(".guessed-letters");

const guess = document.querySelector(".guess");

const userGuess = document.querySelector(".letter");

const wordIP = document.querySelector(".word-in-progress");

const remainingGuessesElement = document.querySelector(".remaining");

const remainingGuessesSpan = document.querySelector(".remaining span");

const message = document.querySelector(".message");

const playAgain = document.querySelector(".play-again");

const word = "magnolia";

const hiddenWord = function(word) {

    const placeholderLetters = [];
    
        for (const letter of word) {
            placeholderLetters.push("●");
        }

    wordIP.innerText = placeholderLetters.join("");

};

hiddenWord(word);

guess.addEventListener("click", function(e){
    e.preventDefault();
    
    const inputValue = userGuess.value;

    console.log(inputValue);

    userGuess.value = "";

});