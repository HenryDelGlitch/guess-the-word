const guessedLetters = document.querySelector(".guessed-letters");

const guess = document.querySelector(".guess");

const userGuess = document.querySelector(".letter");

const wordIP = document.querySelector(".word-in-progress");

const remainingGuessesElement = document.querySelector(".remaining");

const remainingGuessesSpan = document.querySelector(".remaining span");

const message = document.querySelector(".message");

const playAgain = document.querySelector(".play-again");

const word = "magnolia";

const guessedLettersArray = [];

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

    message.innerText = "";
    
    const inputValue = userGuess.value;

    const validateValue = validatePlayer(inputValue);

    if(validateValue !== undefined){
        makeGuess(validateValue);
    }

    userGuess.value = "";
});

const validatePlayer = function(input) {
    const acceptedLetter = /[a-zA-Z]/;

    if(input.length === 0){
        message.innerText = "You have to enter a letter!";
    }else if(input.length > 1){
        message.innerText = "You have to enter one letter!";
    }else if(!input.match(acceptedLetter)){
        message.innerText = "You have to enter a letter!";
    }else{
        return input;
    }
};

const makeGuess = function(letter){
    letter = letter.toUpperCase();
    if(guessedLettersArray.includes(guessedLetters)){
        message.innerText = "You already guessed that!";
    }else{
        guessedLettersArray.push(letter);
        console.log(guessedLettersArray);
    }
};