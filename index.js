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

function getHumanChoice() {
  while (true) {
    humanChoice = prompt("rock, paper, or scissors? your choice: ");
    humanChoice = humanChoice.toLowerCase();
    if (
      humanChoice == "rock" ||
      humanChoice == "paper" ||
      humanChoice == "scissors"
    ) {
      return humanChoice;
    }
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
  console.log(
    message + "\n" + `Human: ${humanScore} | Computer: ${computerScore}`
  );
}

function playGame() {
  while (true) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    if (humanScore == 5) {
      console.log(`You win the game!`);
      return;
    }
    if (computerScore == 5) {
      console.log(`You lost the game!`);
      return;
    }
  }
}

playGame();
