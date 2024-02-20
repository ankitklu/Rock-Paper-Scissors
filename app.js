let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msgId = document.querySelector("#msg");
let msgEle = document.querySelector(".msg-container");

let userUp = document.querySelector("#user-score");
let compUp = document.querySelector("#comp-score");

const compGenChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const idx = Math.floor(Math.random() * 3);
  return options[idx];
};

const drawMessage = (choice) => {
  console.log(`It's a draw, U chose ${choice} as well as the computer chose ${choice}`);
  msgId.innerText = "Draw!!";
  msgId.style.backgroundColor = "rgb(6, 28, 66)";
};

const showResults = (win, choice1, choice2) => {
  if (win) {
    msgId.innerText = `Congrats!! u won ${choice1} beats ${choice2}`;
    msgId.style.backgroundColor = "green";
  } else {
    msgId.innerText = `Computer wins!! ${choice2} beats ${choice1}`;
    msgId.style.backgroundColor = "red";
  }
  scoreUpdate();
};

const scoreUpdate = () => {
  userUp.innerText = userScore;
  compUp.innerText = compScore;
};

const playGame = (userChoice) => {
  // Computer generated random choice
  const compChoice = compGenChoice();

  console.log("User choice is: ", userChoice);
  console.log("Comp choice is: ", compChoice);

  if (userChoice === compChoice) {
    drawMessage(userChoice);
  } else {
    let win = false;
    if (
      (userChoice === "rock" && compChoice === "scissor") ||
      (userChoice === "scissor" && compChoice === "paper") ||
      (userChoice === "paper" && compChoice === "rock")
    ) {
      win = true;
    }
    if (win) {
      userScore++;
    } else {
      compScore++;
    }
    showResults(win, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    let choiceId = choice.getAttribute("id");
    console.log("clicked", choiceId);
    playGame(choiceId);
  });
});
