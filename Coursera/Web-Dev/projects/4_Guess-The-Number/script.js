let userInput = document.querySelector('#guessField');
let randomNum = parseInt(Math.random() * 100 + 1);
console.log("Random Number:", randomNum);

const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const msg = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let playGame = true;

const maxGuesses = 10;
let remainingGuesses = maxGuesses;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateNum(guess);
    });
}

function validateNum(guess) {
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        displayMessage('❌ Please enter a valid number between 1 and 100');
        userInput.value = '';
    } else {
        prevGuess.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess > randomNum) {
        displayMessage(`📈 Too High!`);
    } else if (guess < randomNum) {
        displayMessage(`📉 Too Low!`);
    } else {
        displayMessage(`🎉 Correct! You guessed it right!`);
        endGame();
        return;
    }

    // 🔑 Check if guesses are over
    if (remainingGuesses === 0) {
        displayMessage(`💀 Game Over! The number was ${randomNum}`);
        endGame();
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    remainingGuesses--;   
    remaining.innerHTML = remainingGuesses;
}

function displayMessage(message) {
    msg.innerHTML = message;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    playGame = false;
    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start a New Game</button>`;
    startOver.appendChild(p);
    startGame();
}

function startGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function() {
        randomNum = parseInt(Math.random() * 100 + 1);
        console.log("New Random Number:", randomNum);
        prevGuess = [];
        guessSlot.innerHTML = '';
        msg.innerHTML = '';
        remainingGuesses = maxGuesses;  
        remaining.innerHTML = remainingGuesses;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
