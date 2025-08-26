let userInput = document.querySelector('#guessField')
let randomNum = parseInt(Math.random()*100 +1)
console.log(randomNum);

const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const msg = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const  p = document.createElement('p')
let numGuess = 1
let prevGuess = []
let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateNum(guess);
    })
}
function validateNum(guess){
    if(guess < 1){
        userInput.value = ''
        alert('Please Enter a number greater than 1')
        
    } else if(guess > 100 ){
        userInput.value = ''
        alert('Please enter a number less than 100')
    } else if(isNaN(guess)){
        userInput.value = ''
        alert('Please enter a valid number between 1 to 100')
    } else{
        prevGuess.push(guess)
        if(numGuess === 6){
            displayMessage(`Game Over.Random Number was ${randomNum}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //check if mnumber matches with that randomnim
    if(guess > randomNum){
        displayMessage(`Guess value is too High`)
    } else if (guess <randomNum){
        displayMessage(`Guess value is tooo Low`)
    } else{
        displayMessage(`Congratulations Your guess is right.Value guessed matched with our number`);
        endGame()    
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `
    numGuess++
    remaining.innerHTML = `${6 - numGuess}`
}

function displayMessage(message){
    msg.innerHTML = `${message}`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    playGame = false;
    p.classList.add('button')
    p.innerHTML = `<button id="newGame">Start a New Game</button>`;
    startOver.appendChild(p)
    startGame()

}

function startGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(){
        randomNum = parseInt(Math.random()*100 +1)
        userInput.value =''
        prevGuess = []
        numGuess = 1
        msg.innerHTML = ''
        remaining.innerHTML=`${5 - numGuess}`
        userInput.removeAttribute('disabled')
        guessSlot.innerHTML = ''
        startOver.removeChild(p);
        playGame =true
    });

}

