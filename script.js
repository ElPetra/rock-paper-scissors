let btnNode = document.querySelectorAll(".btn");
let scoreAi = document.querySelector("#score_ai");
let scoreHuman = document.querySelector("#score_human");
let drawNode = document.querySelector(".draw");
let btnsNode = document.querySelector(".btns");
let btnNext = document.querySelector(".next");
let btnRestart = document.querySelector(".restart");
let rightHand = document.querySelector("#right-hand");
let leftHand = document.querySelector("#left-hand");
let btnsResultNode = document.querySelector(".btns__result");
let countAi = 0;
let countHuman = 0;

for (let el of btnNode) {
  let humanChoise = el.getAttribute("id");
  el.addEventListener("click", function () {
    if (humanChoise == "paper") {
      rightHand.src = "src/images/Human_Arm_Paper.webp";
    } else if (humanChoise == "scissors") {
      rightHand.src = "src/images/Human_Arm_Scissors.webp";
    } else {
      rightHand.src = "src/images/Human_Arm.webp";
    }
    game(humanChoise);
  });
}

function game(choise) {
  let arr = ["rock", "paper", "scissors"];
  let randomN = Math.floor(Math.random() * arr.length);
  let choiseAi = arr[randomN];
  if (choiseAi === choise) {
    countAi += 1;
    countHuman += 1;
    drawNode.classList.remove("d-none");
    btnsNode.classList.add("d-none");
  } else if (choiseAi === "rock" && choise === "paper") {
    countHuman += 1;
  } else if (choiseAi === "paper" && choise === "scissors") {
    countHuman += 1;
  } else if (choiseAi === "scissors" && choise === "rock") {
    countHuman += 1;
  } else {
    countAi += 1;
  }
  if (choiseAi == "rock") {
    leftHand.src = "src/images/AI_Arm.webp";
  } else if (choiseAi == "paper") {
    leftHand.src = "src/images/AI_Arm_Paper.webp";
  } else if (choiseAi == "scissors") {
    leftHand.src = "src/images/AI_Arm_Scissors.webp";
  }
  btnsResultNode.classList.remove("d-none");
  btnsNode.classList.add("d-none");
  scoreAi.textContent = countAi;
  scoreHuman.textContent = countHuman;
}

btnNext.addEventListener("click", nextGame);
btnRestart.addEventListener("click", restartGame);

function nextGame() {
  drawNode.classList.add("d-none");
  btnsResultNode.classList.add("d-none");
  btnsNode.classList.remove("d-none");
}

function restartGame() {
  countAi = 0;
  countHuman = 0;
  scoreAi.textContent = 0;
  scoreHuman.textContent = 0;
  nextGame();
}
