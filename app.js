function getComputerChoice(...choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice(buttonId) {
    const choices = {
        rock: "rock",
        paper: "paper",
        scissors: "scissors"
    };
    return choices[buttonId];
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); // Make humanChoice case-insensitive

    if (humanChoice === computerChoice) {
        return `It's a tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
    } else {
        return `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`;
    }
}

function handleButtonClick(event) {
    const buttonId = event.target.id;
    const humanChoice = getHumanChoice(buttonId);
    const computerChoice = getComputerChoice("rock", "paper", "scissors");
    const result = playRound(humanChoice, computerChoice);

    // Display result in the result div
    document.getElementById('result').textContent = result;

    if (result.includes("You win!")) {
        humanScore++;
    } else if (result.includes("You lose!")) {
        computerScore++;
    }

    updateScore();
}

function updateScore() {
    // Display scores in the score div
    document.getElementById('score').textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
}

// Setup event listeners
document.getElementById('rock').addEventListener('click', handleButtonClick);
document.getElementById('paper').addEventListener('click', handleButtonClick);
document.getElementById('scissors').addEventListener('click', handleButtonClick);
document.getElementById('start-game').addEventListener('click', playGame);

// Initialize game state
playGame();
