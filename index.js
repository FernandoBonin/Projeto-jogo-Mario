"use strict";
// GET ELEMENT
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const gameOver = document.querySelector(".gameOver");
const btnPLayAgain = document.querySelector(".btnPlay");
let score = document.getElementById("score");

let n = 0;

// ADD CLASS JUMP
const jump = () => {
  mario.classList.add("jump");

  // REMOVE CLASS JUMP
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

// EVENT JUMP
document.addEventListener("keydown", jump);

// END ANIMATION
const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = Number(
    window.getComputedStyle(mario).bottom.replace("px", "")
  );
  const cloudsPosition = clouds.offsetLeft;

  //console.log(pipePosition);

  if (pipePosition <= 140 && pipePosition > 0 && marioPosition < 90) {
    pipe.classList.remove("pipeAnimation");
    pipe.style.left = `${pipePosition}px`;

    mario.classList.remove("jump");
    mario.style.bottom = `${marioPosition}px`;

    clouds.classList.remove("cloudsAnimation");
    clouds.style.left = `${cloudsPosition}px`;

    mario.src = "img/game-over.png";
    mario.classList.add("marioDead");

    gameOver.removeAttribute("hidden");
    btnPLayAgain.removeAttribute("hidden");

    document.removeEventListener("keydown", jump);

    //clearInterval(loop);
  }
}, 10);

//COUNT SCORE
const countScore = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = Number(
    window.getComputedStyle(mario).bottom.replace("px", "")
  );

  if (marioPosition > 0) {
    n += 1;
    score.innerHTML = n;

    // console.log(n);
  }
  console.log(marioPosition);
  console.log(pipePosition);
}, 1000);

// FUNCTION PLAY AGAIN
function playAgain() {
  pipe.classList.add("pipeAnimation");
  pipe.style.left = "initial";

  clouds.classList.add("cloudsAnimation");
  clouds.style.left = "initial";

  mario.src = "img/mario.gif";
  mario.style.bottom = "0";
  mario.classList.remove("marioDead");

  gameOver.setAttribute("hidden", "hidden");
  btnPLayAgain.setAttribute("hidden", "hidden");

  document.addEventListener("keydown", jump);

  n = 0;
  score.innerHTML = n;
}

// EVENT PLAY AGAIN
btnPLayAgain.addEventListener("click", playAgain);
