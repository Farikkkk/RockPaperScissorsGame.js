const buttons = document.querySelectorAll("button");
const resultScore = document.querySelector(".result");
let userScoreEl = document.querySelector("#user-score");
let computerScoreEl = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const result = playRound(btn.className, computerPlay());
    resultScore.innerHTML = result;
    userScoreEl.innerHTML = playerScore;
    computerScoreEl.innerHTML = computerScore;
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}
