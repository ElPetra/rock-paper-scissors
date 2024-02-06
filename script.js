let btnNode = document.querySelectorAll(".btn");
let btnRock = document.querySelector(".btn_rock");
let btnPaper = document.querySelector(".btn_paper");
let btnScissors = document.querySelector(".btn_scissors");
let scoreAi = document.querySelector("#score_ai");
let scoreHuman = document.querySelector("#score_human");
let drawNode = document.querySelector(".draw");
let btnsNode = document.querySelector(".btns");
let btnNext = document.querySelector(".next");
let btnRestart = document.querySelector(".restart");
let rightHand = document.querySelector("#right-hand");
let leftHand = document.querySelector("#left-hand");
let countAi = 0;
let countHuman = 0;

for (let el of btnNode) {
  let humanChoise = el.getAttribute("id");
  el.addEventListener("click", function () {
    game(humanChoise);
  });
}

function game(choise) {
  let arr = ["rock", "paper", "scissors"];
  let randomN = Math.floor(Math.random() * arr.length);
  let choiseAi = arr[randomN];
  console.log(arr[randomN]);
  if (choiseAi === choise) {
    console.log("IT'S  A  DRAW");
    countAi += 1;
    countHuman += 1;
    drawNode.classList.remove("d-none");
    btnRock.classList.add("d-none");
    btnPaper.classList.add("d-none");
    btnScissors.classList.add("d-none");
  } else if (choiseAi === "rock" && choise === "paper") {
    console.log("выиграл человек");
    countHuman += 1;
  } else if (choiseAi === "paper" && choise === "scissors") {
    console.log("выиграл человек");
    countHuman += 1;
  } else if (choiseAi === "scissors" && choise === "rock") {
    console.log("выиграл человек");
    countHuman += 1;
  } else {
    console.log("выиграл компьютер");
    countAi += 1;
  }

  if ((choiseAi == "rock")) {
    leftHand.src = "src/images/AI_Arm.webp";
  } else if (choiseAi == "paper") {
    leftHand.src = "src/images/AI_Arm_Paper.webp";
  } else if (choiseAi == "scissors") {
    leftHand.src = "src/images/AI_Arm_Scissors.webp";
  }
    btnNext.classList.remove("d-none");
  btnRestart.classList.remove("d-none");
  btnRock.classList.add("d-none");
  btnPaper.classList.add("d-none");
  btnScissors.classList.add("d-none");
  scoreAi.textContent = countAi;
  scoreHuman.textContent = countHuman;
}

btnNext.addEventListener("click", nextGame);
btnRestart.addEventListener("click", restartGame);

function nextGame() {
  drawNode.classList.add("d-none");
  btnNext.classList.add("d-none");
  btnRestart.classList.add("d-none");
  btnRock.classList.remove("d-none");
  btnPaper.classList.remove("d-none");
  btnScissors.classList.remove("d-none");
}

function restartGame() {
  countAi = 0;
  countHuman = 0;
  scoreAi.textContent = 0;
  scoreHuman.textContent = 0;
  nextGame();
}

btnScissors.addEventListener("click", function () {
  rightHand.src = "src/images/Human_Arm_Scissors.webp";
});

btnPaper.addEventListener("click", function () {
  rightHand.src = "src/images/Human_Arm_Paper.webp";
});

btnRock.addEventListener("click", function () {
  rightHand.src = "src/images/Human_Arm.webp";
});
