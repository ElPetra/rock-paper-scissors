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
let countAi = 0;
let countHuman = 0;

for (let el of btnNode) {
  let humanChoise = el.getAttribute("id");
  el.addEventListener("click", function () {
    compare(humanChoise);
  });
}

function compare(choise) {
  let arr = ["rock", "paper", "scissors"];
  let randomN = Math.floor(Math.random() * arr.length);
    console.log(arr[randomN]);
  if (arr[randomN] === choise) {
    console.log("IT'S  A  DRAW");
    countAi += 1;
    countHuman += 1;
    drawNode.classList.remove("d-none");
    btnRock.classList.add("d-none");
    btnPaper.classList.add("d-none");
    btnScissors.classList.add("d-none");
  } else if (arr[randomN] === "rock" && choise === "paper") {
    console.log("выиграл человек");
    countHuman += 1;
  } else if (arr[randomN] === "paper" && choise === "scissors") {
    console.log("выиграл человек");
    countHuman += 1;
  } else if (arr[randomN] === "scissors" && choise === "rock") {
    console.log("выиграл человек");
    countHuman += 1;
  } else {
    console.log("выиграл компьютер");
    countAi += 1;
  }
  btnNext.classList.remove("d-none");
  btnRestart.classList.remove("d-none");
  btnRock.classList.add("d-none");
  btnPaper.classList.add("d-none");
  btnScissors.classList.add("d-none");
  scoreAi.textContent = countAi;
  scoreHuman.textContent = countHuman;
}


// не понимаю куда надо засунуть содержимое этой функции или вызов этой функции и картинки в любом случае меняются не корректно
// function changeImg() {
//     if (arr[randomN] === arr[1]) {
// document.getElementById("left-hand").src = "./src/images/AI Arm_Paper";
//     } else if (arr[randomN] === arr[2]) {
// document.getElementById("left-hand").src = "./src/images/AI Arm_Scissors";
//     } else if (choise === "paper") {
// document.getElementById("right-hand").src = "./src/images/Human Arm_Paper";       
//     } else if (choise === "scissors") {
// document.getElementById("right-hand").src = "./src/images/Human Arm_Scissors";
//     }
// }



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
  nextGame();
}
