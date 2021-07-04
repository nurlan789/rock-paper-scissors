const buttons = document.getElementsByTagName('button');
const result = document.querySelector('#result');

let buttonsCount = buttons.length;
for (let i = 0; i < buttonsCount; i++) {
    buttons[i].onclick = function (e) {
        playerSelection = this.id;
        game();
    }
}

let playerScore = 0;
let computerScore = 0;
let playerSelection;

function computerPlay() {
    let arr = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);
    return arr[random];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player == computer) {
        return "It's a tie";
    } else if (player == "rock" && computer == "paper") {
        computerScore++;
        return "You Lost! Paper beats Rock";
    } else if (player == "rock" && computer == "scissors") {
        playerScore++;
        return "You Won! Rock beats Scissors";
    } else if (player == "paper" && computer == "scissors") {
        computerScore++;
        return "You Lost! Scissors beats Paper";
    } else if (player == "paper" && computer == "rock") {
        playerScore++;
        return "You Won! Paper beats Rock";
    } else if (player == "scissors" && computer == "rock") {
        computerScore++;
        return "You Lost! Rock beats Scissors";
    } else if (player == "scissors" && computer == "paper") {
        playerScore++;
        return "You Won! Scissors beats Paper";
    }
}

function game() {
    let computerSelection = computerPlay();
    let message = "";
    message = playRound(playerSelection, computerSelection);
    result.innerHTML = message;

    let para = document.createElement('p');
    let text = document.createTextNode(playerScore + " - " + computerScore);
    para.appendChild(text);
    result.appendChild(para);

    if (playerScore == 5 || computerScore == 5) {
        let finalPara = document.createElement('h2')
        let finalMessage = "";
        if (playerScore > computerScore) {
            finalMessage = document.createTextNode("You won the game!");
        } else if (playerScore < computerScore) {
            finalMessage = document.createTextNode("You lost the game");
        }
        finalPara.appendChild(finalMessage);
        result.appendChild(finalPara);
        playerScore = 0;
        computerScore = 0;
    }
}
