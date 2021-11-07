let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".player-choice")
const declareWinner = document.querySelector(".winner");
const result = document.querySelector(".round-result")
const submitRounds = document.getElementById('submit-rounds');
const inputForm = document.getElementById('rounds')
const again = document.getElementById('try-again')
const closeButton = document.getElementById('close');
const resultWindow = document.getElementById('results')
const shadow = document.getElementById('shadow')

const plays = ['rock', 'paper', 'scissors'];

function checkIfRoundNumValid() {
    let rounds = document.getElementById('rounds').value

    playerScore = 0;
    computerScore = 0;
    updatePlayerScore()
    updateComputerScore()

    if (!Number.isInteger(parseFloat(rounds)) || (parseFloat(rounds) <= 0)) {
        document.querySelector('#number-of-rounds').textContent = 'You need to input an integer larger than 0.';
    } else {
        hide()
        document.querySelector('#number-of-rounds').textContent = 'Alright! Let\'s play.';
    }
}

function startGame() {
    choices.forEach((choice) => { choice.removeAttribute('disabled') })
}

function computerPlay() {
    return plays[~~(Math.random() * plays.length)]
}

function hide() {
    var button = document.getElementById('hide');
    button.style.display = "none";
}

function roundResults(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        result.textContent = "It's a tie!"
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'scissors' && computerSelection == 'rock') ||
        (playerSelection == 'paper' && computerSelection == 'scissors')) {

        result.textContent = `You lose! ${ computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${ playerSelection }.`

        computerScore = ++computerScore
        updateComputerScore()
    } else {
        result.textContent = `You win! ${ playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${ computerSelection }.`

        playerScore = ++playerScore
        updatePlayerScore()
    }
}

function declareResult() {
    let numberOfRounds = document.getElementById("rounds").value;
    let retryButton = document.querySelector("#try-again");

    if ((playerScore == numberOfRounds) || (computerScore == numberOfRounds)) {
        if (playerScore > computerScore) {
            showResults()
            declareWinner.textContent = 'Game! You win!'
            retryButton.innerText = 'Play again?'
        } else if (computerScore > playerScore) {
            showResults()
            declareWinner.textContent = 'Game! You lose!'
            retryButton.innerText = 'Try again?'
        } else {
            showResults()
            declareWinner.textContent = 'Game! It\'s a tie!'
            retryButton.innerText = 'Try again?'
        }
    } else {
        //do nothing
    }
}

function updatePlayerScore() {
    let playerScoreCounter = document.querySelector(".player-score")
    playerScoreCounter.textContent = playerScore
}

function updateComputerScore() {
    let computerScoreCounter = document.querySelector(".computer-score")
    computerScoreCounter.textContent = computerScore
}

function tryAgain() {
    playerScore = 0;
    computerScore = 0;
    updatePlayerScore();
    updateComputerScore();

    declareWinner.textContent = ''
    result.textContent = ''
    resultWindow.style.display = "none"
    document.querySelector('#number-of-rounds').textContent = 'How many rounds should we play?';

    closeResults()
    reveal()
}

function hide() {
    submitRounds.style.display = 'none';
    inputForm.style.display = 'none';
}

function reveal() {
    submitRounds.style.display = 'unset';
    inputForm.style.display = 'unset';
}

function disable() {
    choices.forEach((choice) => { choice.toggleAttribute('disabled') })
}

function showResults() {
    resultWindow.style.display = "grid"
    shadow.style.display = "block"
}

function closeResults() {
    resultWindow.classList.remove('active')
    shadow.style.display = "none"
}

again.addEventListener('click', () => {
    tryAgain();
    disable();
})

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        playerSelection = choice.value
        computerSelection = computerPlay()
        roundResults(playerSelection, computerSelection)
        declareResult()
    })
})

submitRounds.addEventListener('click', () => {
    checkIfRoundNumValid();
    startGame();
});

closeButton.addEventListener('click', () => {
    tryAgain();
    disable();
    resultWindow.style.display = "none"
});

shadow.addEventListener('click', () => {
    closeResults()
})