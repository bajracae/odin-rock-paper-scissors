humanScore = 0;
computerScore = 0;

function getComputerChoice() {
	max = 3;
	randomNumber = Math.floor(Math.random() * max);
	if (randomNumber == 0) {
		return "rock";
	} else if (randomNumber == 1) {
		return "paper";
	} else {
		return "scissors";
	}
}

function playRound(humanChoice, computerChoice) {
	message = "";
	if (humanChoice == computerChoice) {
		message = "You both tied! Try again.";
	} else if (humanChoice == "rock" && computerChoice == "scissors") {
		humanScore += 1;
		message = "You win! rock beats scissors.";
	} else if (humanChoice == "paper" && computerChoice == "rock") {
		humanScore += 1;
		message = "You win! paper beats rock.";
	} else if (humanChoice == "scissors" && computerChoice == "paper") {
		humanScore += 1;
		message = "You win! scissors beats paper.";
	} else {
		computerScore += 1;
		message = `You lose! ${computerChoice} beats ${humanChoice}.`;
	}

	result_message =
		message + "\n" + `Human: ${humanScore} | Computer: ${computerScore}`;

	if (humanScore == 5) {
		result_message = `You win the game!`;
	}
	if (computerScore == 5) {
		result_message = `You lost the game!`;
	}

	updateResult(result_message);
}

function updateResult(message) {
	const result = document.querySelector(".result");
	result.textContent = message;
}

function runGame() {
	const buttons = document.querySelectorAll("button");

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			playRound(button.textContent, getComputerChoice());
		});
	});
}

runGame();
