let playerScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll(".player-choice")
let numberOfRounds = document.getElementById("rounds").value

const plays = ['rock', 'paper', 'scissors'];

function checkIfRoundNumValid() {
    rounds = document.getElementById("rounds").value
    if (!Number.isInteger(parseInt(rounds)) || (parseInt(rounds) <= 0)) {
        document.querySelector('.integer-check').textContent = 'You need to input an integer number larger than 0.';
    } else {
        document.querySelector('.integer-check').textContent = 'Alright! Let\'s play.';
    }
}

function computerPlay() {
    return plays[~~(Math.random() * plays.length)]
}

function roundResults(playerSelection, computerSelection) {
    let result = document.querySelector(".round-result")
    if (playerSelection == computerSelection) {
        result.textContent = "It's a tie!"
    } else if ((playerSelection && computerSelection == 'paper') ||
        (playerSelection == 'scissors' && computerSelection == 'rock') ||
        (playerSelection == 'paper' && computerSelection == 'scissors')) {
        computerScore = ++computerScore
        result.textContent = `You lose! ${ computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${ playerSelection }.`
    } else {
        playerScore = ++playerScore
        result.textContent = `You win! ${ playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${ computerSelection }.`
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        playerSelection = choice.value
        computerSelection = computerPlay()
        console.log(roundResults(playerSelection, computerSelection))
    })
})

function game(numberOfRounds) {
    // numberOfRounds = document.getElementById("rounds").value
    for (let i = numberOfRounds; i > 0; --i) {

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