let ComputerChoices = ["Rock", "Paper", "Scissor"];
let UserChoices = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
  let input = prompt("enter 0 for Rock,1 for Paper and 2 for scissor:");
  let choice = parseInt(input);
  if (choice >= 0 && choice <= 2) {
    console.log(`You chose: ${UserChoices[choice]}`);
    return choice;
  } else {
    console.log("wrong input");
  }
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
