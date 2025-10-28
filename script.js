// 1. A random computation runs for Computer response
function getComputerChoice() {
  let computerNumberChoice = Math.floor(Math.random() * 3 + 1);
  let computerChoice;

  if (computerNumberChoice === 1) {
    computerChoice = "Rock";
  } else if (computerNumberChoice === 2) {
    computerChoice = "Paper";
  } else if (computerNumberChoice === 3) {
    computerChoice = "Scissors";
  } else console.error("Computational Error");

  return computerChoice;
}

// console.log(getComputerChoice());

// 2. User Inserts his choice via prompt function and prints in Console and checks response
function getHumanChoice(humanChoice) {
  humanChoice = prompt(
    "Please enter your choice between Rock, Paper & Scissors to compete against computer"
  );

  if (typeof humanChoice === "string" && humanChoice.toLowerCase() === "rock") {
    humanChoice = "Rock";
  } else if (
    typeof humanChoice === "string" &&
    humanChoice.toLowerCase() === "paper"
  ) {
    humanChoice = "Paper";
  } else if (
    typeof humanChoice === "string" &&
    humanChoice.toLowerCase() === "scissors"
  ) {
    humanChoice = "Scissors";
  } else console.error("Invalid User Input");

  return humanChoice;
}
// console.log();

//3. Assign Scores Player-Computer
let humanScore = 0;
let computerScore = 0;

//4. Logic for playing a single Round: if some of the following conditions completed:
// 1. Rock beats Scissors
// 2. Paper beats Rock
// 3. Scissors beat Papers
// 4. If we have the same attribute e have message 'Tie'
// 5. If Players  choice beats Computer we have message 'Win'
// 6. If Computer beats Player we have message 'Lose'

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  if (humanChoice === "Rock" && computerChoice === "Scissors") {
    humanScore += 1;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    computerScore += 1;
    return `You lost! ${humanChoice} loses to ${computerChoice}.`;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanScore += 1;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    computerScore += 1;
    return `You lost! ${humanChoice} loses to ${computerChoice}.`;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    humanScore += 1;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    computerScore += 1;
    return `You lost! ${humanChoice} loses to ${computerChoice}.`;
  } else if (humanChoice === computerChoice) {
    return `Tie! Player selected: ${humanChoice}, and CPU selected ${computerChoice}`;
  } else
    return `Valid player input only Rock, Paper, Scissors! Please choose from these options`;
}

console.log(playRound());
