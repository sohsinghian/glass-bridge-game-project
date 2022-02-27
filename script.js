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

buildGlassBridge(20);

const left1 = document.querySelectorAll(".glass")[0];
const left2 = document.querySelectorAll(".glass")[1];
const left3 = document.querySelectorAll(".glass")[2];
const left4 = document.querySelectorAll(".glass")[3];
const left5 = document.querySelectorAll(".glass")[4];
const left6 = document.querySelectorAll(".glass")[5];
const left7 = document.querySelectorAll(".glass")[6];
const left8 = document.querySelectorAll(".glass")[7];
const left9 = document.querySelectorAll(".glass")[8];
const left10 = document.querySelectorAll(".glass")[9];
const right1 = document.querySelectorAll(".glass")[10];
const right2 = document.querySelectorAll(".glass")[11];
const right3 = document.querySelectorAll(".glass")[12];
const right4 = document.querySelectorAll(".glass")[13];
const right5 = document.querySelectorAll(".glass")[14];
const right6 = document.querySelectorAll(".glass")[15];
const right7 = document.querySelectorAll(".glass")[16];
const right8 = document.querySelectorAll(".glass")[17];
const right9 = document.querySelectorAll(".glass")[18];
const right10 = document.querySelectorAll(".glass")[19];

const leftArray = [
  left1,
  left2,
  left3,
  left4,
  left5,
  left6,
  left7,
  left8,
  left9,
  left10,
];

const rightArray = [
  right1,
  right2,
  right3,
  right4,
  right5,
  right6,
  right7,
  right8,
  right9,
  right10,
];

const randomLeftOrRight = () => {
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
randomLeftOrRight();

const moveLeft10 = () => {
  if (left10.value === true) {
    document.querySelectorAll(".glass")[9].appendChild(player);
    leftButton.removeEventListener("click", moveLeft10);
    rightButton.removeEventListener("click", moveRight10);
    return alert("Congrats! You win $456 billion!");
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
  if (left9.value === true) {
    document.querySelectorAll(".glass")[8].appendChild(player);
    leftButton.removeEventListener("click", moveLeft9);
    rightButton.removeEventListener("click", moveRight9);
    leftButton.addEventListener("click", moveLeft10);
    rightButton.addEventListener("click", moveRight10);
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
  if (left8.value === true) {
    document.querySelectorAll(".glass")[7].appendChild(player);
    leftButton.removeEventListener("click", moveLeft8);
    rightButton.removeEventListener("click", moveRight8);
    leftButton.addEventListener("click", moveLeft9);
    rightButton.addEventListener("click", moveRight9);
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
  if (left7.value === true) {
    document.querySelectorAll(".glass")[6].appendChild(player);
    leftButton.removeEventListener("click", moveLeft7);
    rightButton.removeEventListener("click", moveRight7);
    leftButton.addEventListener("click", moveLeft8);
    rightButton.addEventListener("click", moveRight8);
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
  if (left6.value === true) {
    document.querySelectorAll(".glass")[5].appendChild(player);
    leftButton.removeEventListener("click", moveLeft6);
    rightButton.removeEventListener("click", moveRight6);
    leftButton.addEventListener("click", moveLeft7);
    rightButton.addEventListener("click", moveRight7);
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
  if (left5.value === true) {
    document.querySelectorAll(".glass")[4].appendChild(player);
    leftButton.removeEventListener("click", moveLeft5);
    rightButton.removeEventListener("click", moveRight5);
    leftButton.addEventListener("click", moveLeft6);
    rightButton.addEventListener("click", moveRight6);
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
  if (left4.value === true) {
    document.querySelectorAll(".glass")[3].appendChild(player);
    leftButton.removeEventListener("click", moveLeft4);
    rightButton.removeEventListener("click", moveRight4);
    leftButton.addEventListener("click", moveLeft5);
    rightButton.addEventListener("click", moveRight5);
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
  if (left3.value === true) {
    document.querySelectorAll(".glass")[2].appendChild(player);
    leftButton.removeEventListener("click", moveLeft3);
    rightButton.removeEventListener("click", moveRight3);
    leftButton.addEventListener("click", moveLeft4);
    rightButton.addEventListener("click", moveRight4);
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
  if (left2.value === true) {
    document.querySelectorAll(".glass")[1].appendChild(player);
    leftButton.removeEventListener("click", moveLeft2);
    rightButton.removeEventListener("click", moveRight2);
    leftButton.addEventListener("click", moveLeft3);
    rightButton.addEventListener("click", moveRight3);
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
  const player = document.querySelector("#player");
  if (left1.value === true) {
    document.querySelectorAll(".glass")[0].appendChild(player);
    leftButton.removeEventListener("click", moveLeft);
    rightButton.removeEventListener("click", moveRight);
    leftButton.addEventListener("click", moveLeft2);
    rightButton.addEventListener("click", moveRight2);
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

const moveRight10 = () => {
  if (right10.value === true) {
    document.querySelectorAll(".glass")[19].appendChild(player);
    rightButton.removeEventListener("click", moveRight10);
    leftButton.removeEventListener("click", moveLeft10);
    return alert("Congrats! You win $456 billion");
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
  if (right9.value === true) {
    document.querySelectorAll(".glass")[18].appendChild(player);
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
  if (right8.value === true) {
    document.querySelectorAll(".glass")[17].appendChild(player);
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
  if (right7.value === true) {
    document.querySelectorAll(".glass")[16].appendChild(player);
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
  if (right6.value === true) {
    document.querySelectorAll(".glass")[15].appendChild(player);
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
  if (right5.value === true) {
    document.querySelectorAll(".glass")[14].appendChild(player);
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
  if (right4.value === true) {
    document.querySelectorAll(".glass")[13].appendChild(player);
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
  if (right3.value === true) {
    document.querySelectorAll(".glass")[12].appendChild(player);
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
  if (right2.value === true) {
    document.querySelectorAll(".glass")[11].appendChild(player);
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
  const player = document.querySelector("#player");
  if (right1.value === true) {
    document.querySelectorAll(".glass")[10].appendChild(player);
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
