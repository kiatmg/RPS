let ComputerChoices = ["Rock", "Paper", "Scissor"];
let UserChoices = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

const pResult = document.querySelector(".pResult");
pResult.textContent = getComputerChoice();

function getHumanChoice() {
  const input = document.querySelector("input");
  const button = document.querySelector("button");
  const hResult = document.querySelector(".hResult");
  button.addEventListener("click", () => {
    const myItem = input.value;
    input.value = "";
    let choice = parseInt(myItem);
    if (choice >= 0 && choice <= 2) {
      console.log(`You chose: ${UserChoices[choice]}`);
      const hResult = document.querySelector(".hResult");
      hResult.textContent = choice;
    } else {
      console.log("wrong input");
    }
  });
}

function playgame() {
  let ComputerScore = 0;
  let UserScore = 0;

  function playround(human, computer) {
    if (UserChoices[human] === ComputerChoices[computer]) {
      console.log("Tie,Same picks,Try Again!");
    } else if (
      (UserChoices[human] === "Rock" &&
        ComputerChoices[computer] === "Scissor") ||
      (UserChoices[human] === "Paper" &&
        ComputerChoices[computer] === "Rock") ||
      (UserChoices[human] === "Scissor" &&
        ComputerChoices[computer] === "Paper")
    ) {
      console.log("User Won!");
      UserScore++;
      console.log(`UserScore: ${UserScore},ComputerScore:${ComputerScore}`);
    } else if (
      (UserChoices[human] === "Scissor" &&
        ComputerChoices[computer] === "Rock") ||
      (UserChoices[human] === "Rock" &&
        ComputerChoices[computer] === "Paper") ||
      (UserChoices[human] === "Paper" &&
        ComputerChoices[computer] === "Scissor")
    ) {
      console.log("Computer Won!");
      ComputerScore++;
      console.log(`UserScore: ${UserScore},ComputerScore:${ComputerScore}`);
    } else {
      console.log("WTF just happend!");
    }
  }
  for (let i = 0; i < 5; i++) {
    console.log(`--- ROUND ${i + 1} ---`);
    let user = getHumanChoice();
    console.log(`User: ${user}`);
    let computer = getComputerChoice();
    console.log(`Pc: ${computer}`);
    playround(user, computer);
  }
}
playgame();
