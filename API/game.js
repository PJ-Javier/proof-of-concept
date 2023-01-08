let game = document.querySelector("game");
let frog = document.querySelector("#frog");
let poop = document.querySelector("#poop");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");


//Declaring the score counter
let interval = null;
let playerScore = 0;

let scoreCounter = () => {
  playerScore++;
  score.innerHTML = `Score <b>${playerScore}</b>`;
}

//Code to start the game
window.addEventListener("keydown", (start) => {
  if (start.code == "Space") {
    gameOver.style.display = "none";
    poop.classList.add("poopAnimation");

    let playerScore = 0;
    interval = setInterval(scoreCounter, 200);
  }
});

//Code to make the character move
window.addEventListener("keydown", (e) => {

  if (e.key == "ArrowUp")
      if (frog.classList != "frogAnimation") {
          frog.classList.add("frogAnimation");

          setTimeout(() => {
              frog.classList.remove("frogAnimation");
          }, 500);
      }
});

//Code when the player hits the poop, the game is over
let result = setInterval(() => {
  let frogBottom = parseInt(getComputedStyle(frog).getPropertyValue("bottom"));

  let poopLeft = parseInt(getComputedStyle(poop).getPropertyValue("left"));

  if (frogBottom <= 90 && poopLeft >= 20 && poopLeft <= 100) {
    gameOver.style.display = "poop";
    poop.classList.remove("poopAnimation");
    clearInterval(interval);
    playerScore = 0;
  }
}, 10);
