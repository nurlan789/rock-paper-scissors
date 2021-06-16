let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let arr = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);
    return arr[random];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player == computer) {
        return "Tie";
    } else if (player == "rock" && computer == "paper") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    } else if (player == "rock" && computer == "scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors";
    } else if (player == "paper" && computer == "scissors") {
        computerScore++;
        return "You Lose! Scissors beats paper";
    } else if (player == "paper" && computer == "rock") {
        playerScore++;
        return "You Win! Paper beats Rock";
    } else if (player == "scissors" && computer == "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    } else if (player == "scissors" && computer == "paper") {
        playerScore++;
        return "You Win! Scissors beats Paper";
    }
}

function game() {
    let message = "";
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter rock, paper or scissors")
        let computerSelection = computerPlay();
        message = playRound(playerSelection, computerSelection);
        console.log(message);
    }
    if (playerScore > computerScore) {
        console.log("Congratulations, You won the game!")
    } else if (playerScore < computerScore) {
        console.log("You lost the game, try again")
    } else {
        console.log("It's a tie, try again");
    }
}