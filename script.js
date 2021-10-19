const plays = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return plays[~~(Math.random() * plays.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = test.toLowerCase();
    computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        return ("It's a tie!")
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'scissors' && computerSelection == 'rock') ||
        (playerSelection == 'paper' && computerSelection == 'scissors')) {
        return (`You lose! ${ computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${ playerSelection }.`)
    } else {
        return (`You win! ${ playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${ computerSelection }.`)
    }
}

function game() {
    for (let i = 0; i <= numberOfRounds; i++) {
        console.log(playRound())
    }
}

let test = prompt('Make your play')
let numberOfRounds = prompt('How many rounds should we play for?')

console.log(game())