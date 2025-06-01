let ComputerChoices = ["Rock", "Paper", "Scissor"];
let UserChoices = ["Rock", "Paper", "Scissor"];

const pResult = document.querySelector(".pResult");
const hResult = document.querySelector(".hResult");
const hscoreresult = document.querySelector(".hscoreresult");
const pscoreresult = document.querySelector(".pscoreresult");
const button = document.querySelector("button");
const input = document.querySelector("input");
const winner = document.querySelector(".winner");

button.addEventListener("click", () => {
  const myItem = input.value;
  input.value = "";
  let choice = parseInt(myItem);
  if (choice < 0 || choice > 2) {
    hResult.textContent = "wrong input";
    return;
  }
  let cpuChoice = Math.floor(Math.random() * 3);
  hResult.textContent = choice;
  pResult.textContent = cpuChoice;
  playround(choice, cpuChoice);
});

let ComputerScore = 0;
let UserScore = 0;

function playround(human, computer) {
  if (UserChoices[human] === ComputerChoices[computer]) {
    winner.textContent = "Tie";
  } else if (
    (UserChoices[human] === "Rock" &&
      ComputerChoices[computer] === "Scissor") ||
    (UserChoices[human] === "Paper" && ComputerChoices[computer] === "Rock") ||
    (UserChoices[human] === "Scissor" && ComputerChoices[computer] === "Paper")
  ) {
    console.log("User Won!");
    UserScore++;
    if (UserScore === 3) {
      winner.textContent = "Human Won!";
      button.disabled = true;
    }
    hscoreresult.textContent = UserScore;
    console.log(`UserScore: ${UserScore},ComputerScore:${ComputerScore}`);
  } else if (
    (UserChoices[human] === "Scissor" &&
      ComputerChoices[computer] === "Rock") ||
    (UserChoices[human] === "Rock" && ComputerChoices[computer] === "Paper") ||
    (UserChoices[human] === "Paper" && ComputerChoices[computer] === "Scissor")
  ) {
    console.log("Computer Won!");
    ComputerScore++;
    if (ComputerScore === 3) {
      winner.textContent = "CPU Won!";
      button.disabled = true;
    }
    pscoreresult.textContent = ComputerScore;
    console.log(`UserScore: ${UserScore},ComputerScore:${ComputerScore}`);
  } else {
    winner.textContent = "wtf";
  }
}
