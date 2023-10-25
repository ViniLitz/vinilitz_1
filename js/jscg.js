const canvas = document.querySelector(".gamearea");
const ctx = canvas.getContext("2d");

let playerwidthandheight = 0;
let playerX = 0;
let playerY = 0;
let velocity = 0;
let playercolor = "lightblue";

let controllerIndex = null;
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

let bluePressed = false;
let pinkPressed = false;
let greenPressed = false;
let redPressed = false;

function setupcanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  playerwidthandheight = canvas.width * 0.1;
  velocity = canvas.width * 0.01;
  playerX = (canvas.width - playerwidthandheight) / 2;
  playerY = (canvas.height - playerwidthandheight) / 2;
}

setupcanvas();

window.addEventListener("resize", setupcanvas);
window.addEventListener("gamepadconnected", (event) => {
  controllerIndex = event.gamepad.index;
  console.log("conectado");
});
window.addEventListener("gamepaddisconnected", (event) => {
  controllerIndex = null;
  console.log("disconectado");
});

function clearscreen() {
  ctx.fillStyle = "rgb(49, 44, 44)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawplayer() {
  ctx.fillStyle = playercolor;
  ctx.fillRect(playerX, playerY, playerwidthandheight, playerwidthandheight);
}

function controllerinput() {
  if (controllerIndex !== null) {
    const gamepad = navigator.getGamepads()[controllerIndex];
    const buttons = gamepad.buttons;
    upPressed = buttons[12].pressed;
    downPressed = buttons[13].pressed;
    rightPressed = buttons[15].pressed;
    leftPressed = buttons[14].pressed;

    const stickdeadzone = 0.4;
    const leftrightvalue = gamepad.axes[0];
    const updownvalue = gamepad.axes[1];
    if (leftrightvalue >= stickdeadzone) {
      rightPressed = true;
    } else if (leftrightvalue <= -stickdeadzone) {
      leftPressed = true;
    }

    if (updownvalue >= stickdeadzone) {
      downPressed = true;
    } else if (updownvalue <= -stickdeadzone) {
      upPressed = true;
    }
    bluePressed = buttons[0].pressed;
    pinkPressed = buttons[2].pressed;
    greenPressed = buttons[3].pressed;
    redPressed = buttons[1].pressed;
  }
}

function moveplayer() {
  if (upPressed) {
    playerY -= velocity;
  }
  if (downPressed) {
    playerY += velocity;
  }
  if (leftPressed) {
    playerX -= velocity;
  }
  if (rightPressed) {
    playerX += velocity;
  }
  if (bluePressed) {
    playercolor = "lightblue";
  }
  if (pinkPressed) {
    playercolor = "pink";
  }
  if (greenPressed) {
    playercolor = "green";
  }
  if (redPressed) {
    playercolor = "red";
  }
}

function updateplayer() {
  moveplayer();
}

function gameloop() {
  clearscreen();
  drawplayer();
  controllerinput();
  updateplayer();
  requestAnimationFrame(gameloop);
}

gameloop();
