"use strict";

const makeSquare = () => {
  const square = document.createElement("div");
  square.className = "glass";
  square.style.backgroundColor = "rgb(0,255,255,0.1)";
  document.querySelector("#glass-bridge").append(square);
};

const buildGlassBridge = (numOfSquare) => {
  for (let i = 1; i <= numOfSquare; i++) {
    makeSquare(i);
  }
};

buildGlassBridge(26);

const glassBridgeArray = Array.from(document.querySelectorAll(".glass"));
const leftArray = glassBridgeArray.slice(0, 13);
const rightArray = glassBridgeArray.slice(13);

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

const player = document.querySelector("#player");

const moveLeft13 = () => {
  if (leftArray[12].value === true) {
    leftArray[12].appendChild(player);
    const alertVictory = () => {
      alert("Congrats! You win the game!");
    };
    setTimeout(alertVictory, 500);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};
const moveLeft12 = () => {
  if (leftArray[11].value === true) {
    leftArray[11].appendChild(player);
    rightButton.removeEventListener("click", moveRight12);
    leftButton.removeEventListener("click", moveLeft12);
    rightButton.addEventListener("click", moveRight13);
    leftButton.addEventListener("click", moveLeft13);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveLeft11 = () => {
  if (leftArray[10].value === true) {
    leftArray[10].appendChild(player);
    rightButton.removeEventListener("click", moveRight11);
    leftButton.removeEventListener("click", moveLeft11);
    rightButton.addEventListener("click", moveRight12);
    leftButton.addEventListener("click", moveLeft12);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};
const moveLeft10 = () => {
  if (leftArray[9].value === true) {
    leftArray[9].appendChild(player);
    rightButton.removeEventListener("click", moveRight10);
    leftButton.removeEventListener("click", moveLeft10);
    rightButton.addEventListener("click", moveRight11);
    leftButton.addEventListener("click", moveLeft11);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveLeft9 = () => {
  if (leftArray[8].value === true) {
    leftArray[8].appendChild(player);
    rightButton.removeEventListener("click", moveRight9);
    leftButton.removeEventListener("click", moveLeft9);
    rightButton.addEventListener("click", moveRight10);
    leftButton.addEventListener("click", moveLeft10);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveLeft8 = () => {
  if (leftArray[7].value === true) {
    leftArray[7].appendChild(player);
    rightButton.removeEventListener("click", moveRight8);
    leftButton.removeEventListener("click", moveLeft8);
    rightButton.addEventListener("click", moveRight9);
    leftButton.addEventListener("click", moveLeft9);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveLeft7 = () => {
  if (leftArray[6].value === true) {
    leftArray[6].appendChild(player);
    rightButton.removeEventListener("click", moveRight7);
    leftButton.removeEventListener("click", moveLeft7);
    rightButton.addEventListener("click", moveRight8);
    leftButton.addEventListener("click", moveLeft8);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveLeft6 = () => {
  if (leftArray[5].value === true) {
    leftArray[5].appendChild(player);
    rightButton.removeEventListener("click", moveRight6);
    leftButton.removeEventListener("click", moveLeft6);
    rightButton.addEventListener("click", moveRight7);
    leftButton.addEventListener("click", moveLeft7);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveLeft5 = () => {
  if (leftArray[4].value === true) {
    leftArray[4].appendChild(player);
    rightButton.removeEventListener("click", moveRight5);
    leftButton.removeEventListener("click", moveLeft5);
    rightButton.addEventListener("click", moveRight6);
    leftButton.addEventListener("click", moveLeft6);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveLeft4 = () => {
  if (leftArray[3].value === true) {
    leftArray[3].appendChild(player);
    rightButton.removeEventListener("click", moveRight4);
    leftButton.removeEventListener("click", moveLeft4);
    rightButton.addEventListener("click", moveRight5);
    leftButton.addEventListener("click", moveLeft5);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveLeft3 = () => {
  if (leftArray[2].value === true) {
    leftArray[2].appendChild(player);
    rightButton.removeEventListener("click", moveRight3);
    leftButton.removeEventListener("click", moveLeft3);
    rightButton.addEventListener("click", moveRight4);
    leftButton.addEventListener("click", moveLeft4);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveLeft2 = () => {
  if (leftArray[1].value === true) {
    leftArray[1].appendChild(player);
    rightButton.removeEventListener("click", moveRight2);
    leftButton.removeEventListener("click", moveLeft2);
    rightButton.addEventListener("click", moveRight3);
    leftButton.addEventListener("click", moveLeft3);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveLeft = () => {
  if (leftArray[0].value === true) {
    leftArray[0].appendChild(player);
    rightButton.removeEventListener("click", moveRight);
    leftButton.removeEventListener("click", moveLeft);
    rightButton.addEventListener("click", moveRight2);
    leftButton.addEventListener("click", moveLeft2);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const leftButton = document.querySelector("#left-btn");
leftButton.addEventListener("click", moveLeft);

const moveRight13 = () => {
  if (rightArray[12].value === true) {
    rightArray[12].appendChild(player);
    const alertVictory = () => {
      alert("Congrats! You win the game!");
    };
    setTimeout(alertVictory, 500);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};
const moveRight12 = () => {
  if (rightArray[11].value === true) {
    rightArray[11].appendChild(player);
    rightButton.removeEventListener("click", moveRight12);
    leftButton.removeEventListener("click", moveLeft12);
    rightButton.addEventListener("click", moveRight13);
    leftButton.addEventListener("click", moveLeft13);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveRight11 = () => {
  if (rightArray[10].value === true) {
    rightArray[10].appendChild(player);
    rightButton.removeEventListener("click", moveRight11);
    leftButton.removeEventListener("click", moveLeft11);
    rightButton.addEventListener("click", moveRight12);
    leftButton.addEventListener("click", moveLeft12);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveRight10 = () => {
  if (rightArray[9].value === true) {
    rightArray[9].appendChild(player);
    rightButton.removeEventListener("click", moveRight10);
    leftButton.removeEventListener("click", moveLeft10);
    rightButton.addEventListener("click", moveRight11);
    leftButton.addEventListener("click", moveLeft11);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveRight9 = () => {
  if (rightArray[8].value === true) {
    rightArray[8].appendChild(player);
    rightButton.removeEventListener("click", moveRight9);
    leftButton.removeEventListener("click", moveLeft9);
    rightButton.addEventListener("click", moveRight10);
    leftButton.addEventListener("click", moveLeft10);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveRight8 = () => {
  if (rightArray[7].value === true) {
    rightArray[7].appendChild(player);
    rightButton.removeEventListener("click", moveRight8);
    leftButton.removeEventListener("click", moveLeft8);
    rightButton.addEventListener("click", moveRight9);
    leftButton.addEventListener("click", moveLeft9);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveRight7 = () => {
  if (rightArray[6].value === true) {
    rightArray[6].appendChild(player);
    rightButton.removeEventListener("click", moveRight7);
    leftButton.removeEventListener("click", moveLeft7);
    rightButton.addEventListener("click", moveRight8);
    leftButton.addEventListener("click", moveLeft8);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveRight6 = () => {
  if (rightArray[5].value === true) {
    rightArray[5].appendChild(player);
    rightButton.removeEventListener("click", moveRight6);
    leftButton.removeEventListener("click", moveLeft6);
    rightButton.addEventListener("click", moveRight7);
    leftButton.addEventListener("click", moveLeft7);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveRight5 = () => {
  if (rightArray[4].value === true) {
    rightArray[4].appendChild(player);
    rightButton.removeEventListener("click", moveRight5);
    leftButton.removeEventListener("click", moveLeft5);
    rightButton.addEventListener("click", moveRight6);
    leftButton.addEventListener("click", moveLeft6);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveRight4 = () => {
  if (rightArray[3].value === true) {
    rightArray[3].appendChild(player);
    rightButton.removeEventListener("click", moveRight4);
    leftButton.removeEventListener("click", moveLeft4);
    rightButton.addEventListener("click", moveRight5);
    leftButton.addEventListener("click", moveLeft5);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveRight3 = () => {
  if (rightArray[2].value === true) {
    rightArray[2].appendChild(player);
    rightButton.removeEventListener("click", moveRight3);
    leftButton.removeEventListener("click", moveLeft3);
    rightButton.addEventListener("click", moveRight4);
    leftButton.addEventListener("click", moveLeft4);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveRight2 = () => {
  if (rightArray[1].value === true) {
    rightArray[1].appendChild(player);
    rightButton.removeEventListener("click", moveRight2);
    leftButton.removeEventListener("click", moveLeft2);
    rightButton.addEventListener("click", moveRight3);
    leftButton.addEventListener("click", moveLeft3);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const moveRight = () => {
  if (rightArray[0].value === true) {
    rightArray[0].appendChild(player);
    rightButton.removeEventListener("click", moveRight);
    leftButton.removeEventListener("click", moveLeft);
    rightButton.addEventListener("click", moveRight2);
    leftButton.addEventListener("click", moveLeft2);
  } else {
    document.querySelector(".life").remove();
    if (document.querySelectorAll(".life").length > 0) {
      alert("You lose a life!");
    } else if (document.querySelectorAll(".life").length === 0) {
      location.reload();
      return alert("You lose!");
    }
  }
};

const rightButton = document.querySelector("#right-btn");
rightButton.addEventListener("click", moveRight);
