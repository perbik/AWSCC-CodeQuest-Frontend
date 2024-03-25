// Step 1: Define the choices available in the game
const choices = ["rock", "paper", "scissors"];

// Step 2: Get references to HTML elements
const player1ChoiceDisplay = document.getElementById('player1-choice-display'); // Get the element with the id of "player1-choice-display"
const player1ScoreDisplay = document.getElementById('player1-score'); // Get the element with the id of "player1-score"
const player2ChoiceDisplay = document.getElementById('player2-choice-display'); // Get the element with the id of "player2-choice-display"
const player2ScoreDisplay = document.getElementById('player2-score'); // Get the element with the id of "player2-score"

const gameStatusDisplay = document.getElementById('game-status'); // Get the element with the id of "game-status"
const resetGameButton = document.getElementById('reset-game-btn'); // Get the element with the id of "reset-game-btn"

const rockBtn = document.getElementById('rock-btn'); // Get the element with the id of "rock-btn"
const paperBtn = document.getElementById('paper-btn'); // Get the element with the id of "paper-btn"
const scissorsBtn = document.getElementById('scissors-btn'); // Get the element with the id of "scissors-btn"

// Step 3: Add event listeners to the buttons
rockBtn.addEventListener("click", function () {
    playerPick("ROCK");
});

paperBtn.addEventListener("click", function () {
    playerPick("PAPER");
});

scissorsBtn.addEventListener("click", function () {
    playerPick("SCISSORS");
});

resetGameButton.addEventListener("click", function () { 
    resetGame();
});


function playerPick(choice) {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const computerPick = choices[Math.floor(Math.random() * choices.length)];

    player1ChoiceDisplay.textContent = `${choice}`;
    player2ChoiceDisplay.textContent = `${computerPick}`; 

    gameStatusDisplay.textContent = '';
    if (choice === computerPick) {
        gameStatusDisplay.textContent = 'Tie!';
    } else if ((choice === "ROCK" && computerPick === "SCISSORS") || 
    (choice === "PAPER" && computerPick === "ROCK") || (choice === "SCISSORS" && computerPick === "PAPER")) {
        gameStatusDisplay.textContent = 'Player 1 wins!';
        player1ScoreDisplay.textContent++;
    } else {
        gameStatusDisplay.textContent = 'Player 2 wins!';
        player2ScoreDisplay.textContent++;      
    }
}

function resetGame(){
    player1ChoiceDisplay.textContent = '';
    player2ChoiceDisplay.textContent = '';
    player1ScoreDisplay.textContent = '';
    player2ScoreDisplay.textContent = '';
    gameStatusDisplay.innerHTML = 'Game Reset!';
}

// Step 4: Define helper functions that will be the actions of the game

// Step 5: Embrace mistakes as opportunities for learning and improvement, and fuel your curiosity by exploring new the wonders of frontend development. The vast tech world is filled with exciting discoveries waiting for you. Ask when you have the need or want to! Just keep coding!