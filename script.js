let playerScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll(".player-choice")
let declareWinner = document.querySelector(".winner");
let result = document.querySelector(".round-result")

let submitRounds = document.getElementById('submit-rounds');
let inputForm = document.getElementById('rounds')

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

submitRounds.addEventListener('click', () => {
    checkIfRoundNumValid();
});

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
    let numberOfRounds = document.getElementById("rounds").value
    let retryButton = document.querySelector("#try-again")

    if ((playerScore == numberOfRounds) || (computerScore == numberOfRounds)) {
        if (playerScore > computerScore) {
            declareWinner.textContent = 'Game! You win!'
            retryButton.innerText = 'Play again?'
        } else if (computerScore > playerScore) {
            declareWinner.textContent = 'Game! You lose!'
            retryButton.innerText = 'Try again?'
        } else {
            declareWinner.textContent = 'Game! It\'s a tie!'
            retryButton.innerText = 'Try again?'
        }
    } else {
        //do nothing
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        playerSelection = choice.value
        computerSelection = computerPlay()
        roundResults(playerSelection, computerSelection)
        declareResult()
    })
})

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
    document.querySelector('#number-of-rounds').textContent = 'How many rounds should we play?';

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


/* function game() {
    for (let i = 0; i <= numberOfRounds; i++) {
        alert(playRound(choice))
    }
}
*/

/*
let test = prompt('Make your play')
let numberOfRounds = prompt('How many rounds should we play for?')

console.log(game()) 
*/