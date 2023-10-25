const tela = document.querySelector(".telajogo");
const cano = document.querySelector(".cano");
const player = document.querySelector(".player");
const stylesplayer = getComputedStyle(player);
const pontosspan = document.querySelector(".pontos");
let jumpdelay = 0;
let playerpositionY = 0;
let playervelocity = 0;
let pontos = 0;

let canoheight = (tela.clientHeight += 5.25) * 2;
console.log(canoheight);
cano.style.height = canoheight + "px";
console.log(cano.clientHeight);

player.classList.add("playerfall");

function gameloop() {
  const Y_ou_X = Math.floor(Math.random() * 2);
  console.log(Y_ou_X);
  let canoY = Math.floor(Math.random() * 50);
  console.log(canoY);
  if (Y_ou_X === 1) {
    cano.style.transform = "translateY(" + (canoY - 45) + "px)";
  } else {
    cano.style.transform = "translateY(" + -(canoY += 80) + "px)";
  }
  setInterval(() => {
    let canoheight = (tela.clientHeight += 5.25) * 2;
    console.log(canoheight);
    cano.style.height = canoheight + "px";
    console.log(cano.clientHeight);
  }, 10);

  setInterval(() => {
    const Y_ou_X = Math.floor(Math.random() * 2);
    console.log(Y_ou_X);
    let canoY = Math.floor(Math.random() * 50);
    console.log(canoY);
    if (Y_ou_X === 1) {
      cano.style.transform = "translateY(" + (canoY - 95) + "px)";
    } else {
      cano.style.transform = "translateY(" + -(canoY += 120) + "px)";
    }
    pontos++;
    pontosspan.innerHTML = pontos;
  }, 3000);
}

gameloop();

function playergravity() {
  if (jumpdelay === 0) {
    playervelocity += 0.01;
    playerpositionY += playervelocity;
    player.style.transform = "translateY(" + playerpositionY + "px)";
    if (playerpositionY + player.clientHeight < window.innerHeight) {
      requestAnimationFrame(playergravity);
    }
  }
}

playergravity();

document.addEventListener("keydown", function (event) {
  jump(event);
});

tela.addEventListener("click", function (event) {
  jump(event);
  tela.requestFullscreen();
});

function jump(event) {
  const teclapressionada = event.key;
  if (teclapressionada === "ArrowUp" || (" " && jumpdelay === 0)) {
    jumpdelay = 1;
    let jumptime = 0;
    while (jumptime < 20) {
      setTimeout(() => {
        player.style.transform = "translateY(" + (playerpositionY - 1) + "px)";
        jumptime++;
      }, 10);
    }
    jumptime = 0;
    playervelocity = 0.3;
    playerpositionY = playerpositionY - 20;
    setTimeout(() => {
      jumpdelay = 0;
      requestAnimationFrame(playergravity);
    }, 200);
  }
}
