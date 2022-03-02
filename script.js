"use strict";

const backgroundMusic = new Audio("music/soundtrack2.mp3");

const turnOnBackgroundMusic = () => {
  backgroundMusic.loop = true;
  backgroundMusic.play();
};

const onButton = document.querySelector("#sound-on-btn");
onButton.addEventListener("click", turnOnBackgroundMusic);

const turnOffBackgroundMusic = () => {
  backgroundMusic.pause();
};

const offButton = document.querySelector("#sound-off-btn");
offButton.addEventListener("click", turnOffBackgroundMusic);

const glassBreakSoundEffect = () => {
  const glassBreak = new Audio("music/glass-break-sound-effect.mp3");
  glassBreak.play();
  const bodySplat = new Audio("music/cartoon-splat.mp3");
  const bodySplatSoundEffect = () => {
    bodySplat.play();
  };
  setTimeout(bodySplatSoundEffect, 500);
};

const failSoundEffect = () => {
  const failSound = new Audio("music/fail-sound.mp3");
  failSound.play();
};

// Create square grids for glass bridge.
const makeSquare = () => {
  const square = document.createElement("div");
  square.className = "glass";
  square.style.backgroundColor = "rgb(0,255,255,0.1)";
  document.querySelector("#glass-bridge").append(square);
};

// Build the glass bridge.
const buildGlassBridge = (numOfSquare) => {
  for (let i = 1; i <= numOfSquare; i++) {
    makeSquare(i);
  }
};

buildGlassBridge(26);

// Put all the glass cells into an array.
const glassBridgeArray = Array.from(document.querySelectorAll(".glass"));
// Put the glass cells at the left side into an array.
const leftArray = glassBridgeArray.slice(0, 13);
// Put the glass cells at the right side into an array.
const rightArray = glassBridgeArray.slice(13);

// Put random values of true and false into the glass cells.
// True represents safe (tempered glass), false represents unsafe (fragile glass).
const randomValueForGlassBridge = () => {
  const trueOrFalse = [true, false];
  for (let i = 0; i < leftArray.length; i++) {
    leftArray[i].value = trueOrFalse[Math.floor(Math.random() * 2)];
  }
  for (let i = 0; i < rightArray.length; i++) {
    if (leftArray[i].value === true) {
      rightArray[i].value = false;
    } else {
      rightArray[i].value = true;
    }
  }
};

randomValueForGlassBridge();

const imageArray = [];
for (let i = 1; i <= 5; i++) {
  const image = document.createElement("img");
  image.setAttribute("id", `player${i}`);
  image.setAttribute("class", "player");
  image.src = `images/player${i}.png`;
  imageArray.push(image);
}
document.querySelector("#player-container").appendChild(imageArray[0]);

const livesArray = [];
const createLives = (playerNumber, numberOfLives) => {
  for (let i = 1; i <= numberOfLives; i++) {
    const image = document.createElement("img");
    image.setAttribute("class", "life");
    image.src = `images/player${playerNumber}.png`;
    livesArray.push(image);
  }
};
createLives(1, 5);
createLives(2, 5);
createLives(3, 5);
createLives(4, 5);
createLives(5, 5);

const player1LivesArray = livesArray.slice(0, 5);
const player2LivesArray = livesArray.slice(5, 10);
const player3LivesArray = livesArray.slice(10, 15);
const player4LivesArray = livesArray.slice(15, 20);
const player5LivesArray = livesArray.slice(20, 25);

for (let i = 0; i < 5; i++) {
  document.querySelector("#lives").appendChild(player1LivesArray[i]);
}

const addCharacter = (characterNumber) => {
  if (characterNumber === 5) {
    document.querySelector("#player-container").appendChild(imageArray[0]);
    for (let i = 0; i < 5; i++) {
      document.querySelector("#lives").appendChild(player1LivesArray[i]);
    }
  } else {
    document
      .querySelector("#player-container")
      .appendChild(imageArray[characterNumber]);
    for (let i = 0; i < 5; i++) {
      if (characterNumber === 1) {
        document.querySelector("#lives").appendChild(player2LivesArray[i]);
      } else if (characterNumber === 2) {
        document.querySelector("#lives").appendChild(player3LivesArray[i]);
      } else if (characterNumber === 3) {
        document.querySelector("#lives").appendChild(player4LivesArray[i]);
      } else if (characterNumber === 4) {
        document.querySelector("#lives").appendChild(player5LivesArray[i]);
      } else if (characterNumber === 5) {
      }
    }
  }
};

const removeCharacter = (characterNumber) => {
  document.querySelector(`#player${characterNumber}`).remove();
  for (let i = 0; i < 5; i++) {
    document.querySelector(".life").remove();
  }
};

const changeCharacter = () => {
  const currentImageIndex = imageArray.indexOf(
    document.querySelector(".player")
  );
  removeCharacter(currentImageIndex + 1);
  addCharacter(currentImageIndex + 1);
};

document
  .querySelector("#change-character-btn")
  .addEventListener("click", function () {
    changeCharacter();
  });

// make a function if next move is unsafe.
const losingMove = () => {
  // Remove a life.
  document.querySelector(".life").remove();
  // Make a glass breaking sound effect.
  glassBreakSoundEffect();
  // If still have lives, prompt lose a life.
  if (document.querySelectorAll(".life").length > 0) {
    alert("You lose a life!");
    // If out of lives, prompt you lose and restart the game.
  } else if (document.querySelectorAll(".life").length === 0) {
    alert("You lose!");
    failSoundEffect();
    const reload = () => location.reload();
    setTimeout(reload, 3500);
  }
};

// Function to alert victory when reach the end of the glass bridge.
const alertVictory = () => {
  alert("Congrats! You win the game!");
  const victorySound = new Audio("music/victory-sound.mp3");
  victorySound.play();
  const reload = () => location.reload();
  setTimeout(reload, 8000);
};

// Function to find out the next index, to determine where to move next.
const findOutNextIndex = () => {
  // Finds the current glass cell the player is in.
  const currentPosition = document.querySelector(".player").parentElement;
  const currentRightIndex = rightArray.indexOf(currentPosition);
  const currentLeftIndex = leftArray.indexOf(currentPosition);
  // Player is at starting point.
  if (currentRightIndex === -1 && currentLeftIndex === -1) {
    return 0;
    // Player is at left lane.
  } else if (currentRightIndex === -1 && currentLeftIndex >= 0) {
    return currentLeftIndex + 1;
    // Player is at right lane.
  } else if (currentRightIndex >= 0 && currentLeftIndex === -1) {
    return currentRightIndex + 1;
  }
};

const moveForward = (direction) => {
  const player = document.querySelector(".player");

  const nextIndex = findOutNextIndex();
  const nextLeftCellValue = leftArray[nextIndex].value;
  const nextRightCellValue = rightArray[nextIndex].value;

  if (direction === "left") {
    if (nextLeftCellValue === true) {
      leftArray[nextIndex].appendChild(player);
      if (nextIndex === 12) {
        setTimeout(alertVictory, 500);
      }
    } else {
      losingMove();
    }
  } else if (direction === "right") {
    if (nextRightCellValue === true) {
      rightArray[nextIndex].appendChild(player);
      if (nextIndex === 12) {
        setTimeout(alertVictory, 500);
      }
    } else {
      losingMove();
    }
  }
};

document.addEventListener("keyup", function (event) {
  if (event.key === "a") {
    moveForward("left");
  } else if (event.key === "d") {
    moveForward("right");
  }
});

const displayHint = () => {
  for (let i = 0; i < glassBridgeArray.length; i++) {
    if (glassBridgeArray[i].value === true) {
      glassBridgeArray[i].style.backgroundColor = "rgb(0,255,255,0.5)";
      const removeHint = () => {
        glassBridgeArray[i].style.backgroundColor = "rgb(0,255,255,0.1)";
      };
      setTimeout(removeHint, 500);
    }
  }
  document.removeEventListener("keydown", hintEventListener);
};

const hintEventListener = () => {
  if (event.key === "h") {
    displayHint();
  }
};
document.addEventListener("keydown", hintEventListener);

const restartGame = () => {
  location.reload();
};

const restartButton = document.querySelector("#restart-btn");
restartButton.addEventListener("click", restartGame);
