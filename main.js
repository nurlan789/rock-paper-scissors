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
        return "You Lose! Paper beats Rock";
    } else if (player == "rock" && computer == "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (player == "paper" && computer == "scissors") {
        return "You Lose! Scissors beats paper";
    } else if (player == "paper" && computer == "rock") {
        return "You Win! Paper beats Rock";
    } else if (player == "scissors" && computer == "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (player == "scissors" && computer == "paper") {
        return "You Win! Scissors beats Paper";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let message = "";
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter rock, paper or scissors")
        let computerSelection = computerPlay();
        message = playRound(playerSelection, computerSelection);
        console.log(message);
        if (message != "Tie" && message!=undefined){
            let str=message.substr(0,8);
            if(str=="You Win!")playerScore++;
            else if(str=="You Lose")computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("Congratulations, You won the game!")
    } else if (playerScore < computerScore) {
        console.log("You lost the game, try again")
    } else {
        console.log("It's tie, try again");
    }
}