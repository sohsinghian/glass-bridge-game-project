"use strict";

// load background music
const backgroundMusic = new Audio("music/soundtrack2.mp3");

// function to play background music.
const turnOnBackgroundMusic = () => {
  backgroundMusic.loop = true;
  backgroundMusic.play();
};

const onButton = document.querySelector("#sound-on-btn");
onButton.addEventListener("click", turnOnBackgroundMusic);

// function to pause background music.
const turnOffBackgroundMusic = () => {
  backgroundMusic.pause();
};

const offButton = document.querySelector("#sound-off-btn");
offButton.addEventListener("click", turnOffBackgroundMusic);

// function for sound effect when lose.
const glassBreakSoundEffect = () => {
  // glass break first
  const glassBreak = new Audio("music/glass-break-sound-effect.mp3");
  glassBreak.play();
  // then body splat after awhile. no screaming sound effect cause can be too annoying.
  const bodySplat = new Audio("music/cartoon-splat.mp3");
  const bodySplatSoundEffect = () => {
    bodySplat.play();
  };
  setTimeout(bodySplatSoundEffect, 800);
};

// function to play sound effect when lose the game.
const failSoundEffect = () => {
  const failSound = new Audio("music/fail-sound.mp3");
  failSound.play();
};

// Create square grids for glass bridge.
const makeSquare = () => {
  const square = document.createElement("div");
  square.className = "glass";
  square.style.backgroundColor = "rgb(0,255,255,0.5)";
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

// Create character images and put them into arrays respectively so can append into lives afterwards.
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

// append default number of lives with default player.
for (let i = 0; i < 5; i++) {
  document.querySelector("#lives").appendChild(player1LivesArray[i]);
}

// Function to change the number of lives to either 3,4 or 5.
const changeNumberOfLives = (numberOfLives) => {
  const currentNumberOfLives = document.querySelectorAll(".life").length;
  if (numberOfLives === 3) {
    if (currentNumberOfLives === 5) {
      document.querySelector(".life").remove();
      document.querySelector(".life").remove();
    } else if (currentNumberOfLives === 4) {
      document.querySelector(".life").remove();
    }
  }
  if (numberOfLives === 4) {
    if (currentNumberOfLives === 5) {
      document.querySelector(".life").remove();
    } else if (currentNumberOfLives === 3) {
      // Get the element
      const life = document.querySelector(".life");
      // Create a copy of it
      const clone = life.cloneNode(true);
      // Inject it into the DOM
      life.after(clone);
    }
  }
  if (numberOfLives === 5) {
    if (currentNumberOfLives === 4) {
      const life = document.querySelector(".life");
      const clone = life.cloneNode(true);
      life.after(clone);
    } else if (currentNumberOfLives === 3) {
      const life = document.querySelector(".life");
      for (let i = 1; i <= 2; i++) {
        const clone = life.cloneNode(true);
        life.after(clone);
      }
    }
  }
};

// Made these functions because i can't remove event listeners with the arguments included.
const changeNumberOfLives3 = () => {
  changeNumberOfLives(3);
};
const changeNumberOfLives4 = () => {
  changeNumberOfLives(4);
};
const changeNumberOfLives5 = () => {
  changeNumberOfLives(5);
};

const life3Button = document.querySelector("#life3-btn");
life3Button.addEventListener("click", changeNumberOfLives3);

const life4Button = document.querySelector("#life4-btn");
life4Button.addEventListener("click", changeNumberOfLives4);

const life5Button = document.querySelector("#life5-btn");
life5Button.addEventListener("click", changeNumberOfLives5);

// function to append new character images so can change characters.
const addCharacter = (characterNumber) => {
  const currentNumberOfLives = document.querySelectorAll(".life").length;
  if (characterNumber === 5) {
    document.querySelector("#player-container").appendChild(imageArray[0]);
    for (let i = 0; i < currentNumberOfLives; i++) {
      document.querySelector("#lives").appendChild(player1LivesArray[i]);
    }
  } else {
    document
      .querySelector("#player-container")
      .appendChild(imageArray[characterNumber]);
    for (let i = 0; i < currentNumberOfLives; i++) {
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

// Function to remove current character images after adding new character images.
const removeCharacter = (characterNumber) => {
  // Length is divided by 2 because addCharacter() function is called first before removeCharacter() function.
  const currentNumberOfLives = document.querySelectorAll(".life").length / 2;
  document.querySelector(`#player${characterNumber}`).remove();
  for (let i = 0; i < currentNumberOfLives; i++) {
    document.querySelector(".life").remove();
  }
};

// Function to change character
const changeCharacter = () => {
  const currentImageIndex = imageArray.indexOf(
    document.querySelector(".player")
  );
  addCharacter(currentImageIndex + 1);
  removeCharacter(currentImageIndex + 1);
};

const changeCharacterButton = document.querySelector("#change-character-btn");
changeCharacterButton.addEventListener("click", changeCharacter);

let timeLeft = 60;
const t = document.querySelector("#timer");

// create function to update timer to countdown by seconds.
const updateTimer = () => {
  timeLeft = timeLeft - 1;
  if (timeLeft >= 0) {
    t.innerText = timeLeft;
  } else if (timeLeft === -1) {
    alert("Time's up! Game over!");
    failSoundEffect();
    const reload = () => location.reload();
    setTimeout(reload, 3500);
  } else if (timeLeft === "stop") {
    return;
  }
};

const startTimer = () => {
  // setInterval is a built-in function that will call the given function
  // every N milliseconds (1 second = 1000 ms)
  setInterval(updateTimer, 1000);
  // It will be a whole second before the time changes, so we'll call the update once ourselves
  updateTimer();
};

// make a function if next move is unsafe.
const losingMove = () => {
  // Remove a life.
  document.querySelector(".life").remove();
  // Make a glass breaking sound effect.
  glassBreakSoundEffect();
  // If still have lives, prompt lose a life.
  if (document.querySelectorAll(".life").length > 0) {
    alert("You lose a life!");
    // If out of lives, prompt game over and restart the game.
  } else if (document.querySelectorAll(".life").length === 0) {
    alert("Game over! You lose!");
    failSoundEffect();
    // To stop timer from continuing to countdown.
    timeLeft = "stop";
    const reload = () => location.reload();
    setTimeout(reload, 3500);
  }
};

// Function to alert victory when reach the end of the glass bridge.
const alertVictory = () => {
  alert("Congrats! You have won 45.6 billion won!");
  const victorySound = new Audio("music/victory-sound.mp3");
  victorySound.play();
  // To stop timer from continuing to countdown.
  timeLeft = "stop";
  const reload = () => location.reload();
  setTimeout(reload, 10000);
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

// Create function to move forward either left or right in the game.
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
      // Change the next wrong glass cell colour to blood red to signify glass breaks and there is blood.
      leftArray[nextIndex].style.backgroundColor = "rgb(170,1,20,0.5)";
    }
  } else if (direction === "right") {
    if (nextRightCellValue === true) {
      rightArray[nextIndex].appendChild(player);
      if (nextIndex === 12) {
        setTimeout(alertVictory, 500);
      }
    } else {
      losingMove();
      // Change the next wrong glass cell colour to blood red to signify glass breaks and there is blood.
      rightArray[nextIndex].style.backgroundColor = "rgb(170,1,20,0.5)";
    }
  }
};

// Create function to flash all safe glass cells.
const displayHint = () => {
  for (let i = 0; i < glassBridgeArray.length; i++) {
    if (glassBridgeArray[i].value === true) {
      glassBridgeArray[i].style.backgroundColor = "rgb(0,255,255,0.8)";
      const removeHint = () => {
        glassBridgeArray[i].style.backgroundColor = "rgb(0,255,255,0.5)";
      };
      setTimeout(removeHint, 300);
    }
  }
  // Remove event listener after flashing so hint can only be used once during game.
  document.removeEventListener("keydown", hintEventListener);
};

const hintEventListener = () => {
  if (event.key === "h") {
    displayHint();
  }
};

const startGame = () => {
  // Only add event listeners for moves and hint only when start game is pressed.
  document.addEventListener("keyup", function (event) {
    if (event.key === "a") {
      moveForward("left");
    } else if (event.key === "d") {
      moveForward("right");
    }
  });
  document.addEventListener("keydown", hintEventListener);
  // Remove event listeners for change number of lives and characters so game cannot be manipulate halfway.
  changeCharacterButton.removeEventListener("click", changeCharacter);
  life3Button.removeEventListener("click", changeNumberOfLives3);
  life4Button.removeEventListener("click", changeNumberOfLives4);
  life5Button.removeEventListener("click", changeNumberOfLives5);
  // Start timer countdown when game starts.
  startTimer();
  // Hide start button and remove event listener so game cannot be manipulated halfway.
  startButton.style.opacity = "0";
  startButton.removeEventListener("click", startGame);
};

const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame);
