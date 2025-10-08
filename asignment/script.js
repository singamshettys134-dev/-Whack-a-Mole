// Select all mole holes
const moles = document.querySelectorAll(".mole");
const scoreDisplay = document.getElementById("score");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restart");

let score = 0;
let activeMole = null;
let gameInterval = null;

// Function to randomly highlight a mole
function activateMole() {
  // remove previous active mole if any
  if (activeMole !== null) {
    moles[activeMole].classList.remove("active");
  }

  // pick a random mole index
  const randomIndex = Math.floor(Math.random() * moles.length);
  moles[randomIndex].classList.add("active");
  activeMole = randomIndex;
}

// Function when mole is clicked
function hitMole(event) {
  if (event.target.classList.contains("active")) {
    score++;
    scoreDisplay.textContent = score;

    // remove the highlight immediately
    event.target.classList.remove("active");

    if (score >= 5) {
      clearInterval(gameInterval);
      message.textContent = "🎉 You win!";
    }
  }
}

// Attach click listeners to all moles
moles.forEach(mole => mole.addEventListener("click", hitMole));

// Start game
function startGame() {
  score = 0;
  scoreDisplay.textContent = score;
  message.textContent = "";
  if (gameInterval) clearInterval(gameInterval);
  gameInterval = setInterval(activateMole, 350);
}

// Restart game
restartBtn.addEventListener("click", startGame);


startGame();
