function getComputerChoice(...choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let choice = prompt("Please enter your choice (rock, paper, or scissors):").toLowerCase();

    while (!validChoices.includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return choice;
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice("rock", "paper", "scissors");
        const result = playRound(humanChoice, computerChoice);
        
        console.log(result);

        if (result.includes("You win!")) {
            humanScore++;
        } else if (result.includes("You lose!")) {
            computerScore++;
        }

        console.log(`Round ${i + 1} - Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log(`You won the game! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the game. Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }
}

// Start the game
playGame();
