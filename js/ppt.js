let youpontos = 0;
let botpontos = 0;
const youpontosspan = document.getElementById("yourscore");
const botpontosspan = document.getElementById("botscore");
const pontos = document.querySelector(".pontos");
const resultsdiv = document.querySelector(".result");
const rockdiv = document.querySelector("#pedra");
const papeldiv = document.querySelector("#papel");
const tesouradiv = document.querySelector("#tesoura");
const restartbtn = document.querySelector(".restartbtn");
const input = document.querySelector(".input");

function reset() {
  youpontosspan.innerHTML = "0";
  botpontosspan.innerHTML = "0";
  resultsdiv.innerHTML = "Pedra, papel e tesoura";
  youpontos = 0;
  botpontos = 0;
  rockdiv.style.borderColor = "rgb(242, 232, 207)";
  papeldiv.style.borderColor = "rgb(242, 232, 207)";
  tesouradiv.style.borderColor = "rgb(242, 232, 207)";
}

function escolhabot() {
  const escolhas = ["r", "p", "s"];
  const randomnumber = Math.floor(Math.random() * 3);
  return escolhas[randomnumber];
}

function win(userChoice) {
  let inpnumber = input.value;
  if (youpontos >= inpnumber || botpontos >= inpnumber) {
    if (inpnumber !== "") {
      reset();
    }
  }
  youpontos++;
  if (inpnumber <= youpontos && inpnumber !== "") {
    resultsdiv.innerHTML = "Fim do jogo. Você venceu!";
    if (botpontos !== inpnumber) {
      youpontosspan.innerHTML = inpnumber;
      tesouradiv.style.borderColor = "green";
      papeldiv.style.borderColor = "green";
      rockdiv.style.borderColor = "green";
    }
  } else {
    youpontosspan.innerHTML = youpontos;
    resultsdiv.innerHTML = "Você venceu!";
    switch (userChoice) {
      case "r":
        rockdiv.style.borderColor = "green";
        papeldiv.style.borderColor = "rgb(242, 232, 207)";
        tesouradiv.style.borderColor = "rgb(242, 232, 207)";
        break;
      case "p":
        rockdiv.style.borderColor = "rgb(242, 232, 207)";
        papeldiv.style.borderColor = "green";
        tesouradiv.style.borderColor = "rgb(242, 232, 207)";
        break;
      case "s":
        rockdiv.style.borderColor = "rgb(242, 232, 207)";
        papeldiv.style.borderColor = "rgb(242, 232, 207)";
        tesouradiv.style.borderColor = "green";
        break;
    }
  }
}

function lose(userChoice) {
  let inpnumber = input.value;
  if (youpontos >= inpnumber || botpontos >= inpnumber) {
    if (inpnumber !== "") {
      reset();
    }
  }
  botpontos++;
  if (inpnumber <= botpontos && inpnumber !== "") {
    resultsdiv.innerHTML = "Fim do jogo. Você perdeu!";
    if (youpontos !== inpnumber) {
      botpontosspan.innerHTML = inpnumber;
      tesouradiv.style.borderColor = "red";
      papeldiv.style.borderColor = "red";
      rockdiv.style.borderColor = "red";
    }
  } else {
    botpontosspan.innerHTML = botpontos;
    resultsdiv.innerHTML = "Você perdeu!";
    switch (userChoice) {
      case "r":
        rockdiv.style.borderColor = "red";
        papeldiv.style.borderColor = "rgb(242, 232, 207)";
        tesouradiv.style.borderColor = "rgb(242, 232, 207)";
        break;
      case "p":
        rockdiv.style.borderColor = "rgb(242, 232, 207)";
        papeldiv.style.borderColor = "red";
        tesouradiv.style.borderColor = "rgb(242, 232, 207)";
        break;
      case "s":
        rockdiv.style.borderColor = "rgb(242, 232, 207)";
        papeldiv.style.borderColor = "rgb(242, 232, 207)";
        tesouradiv.style.borderColor = "red";
        break;
    }
  }
}

function draw(userChoice) {
  let inpnumber = input.value;
  if (youpontos >= inpnumber || botpontos >= inpnumber) {
    if (inpnumber !== "") {
      reset();
    }
  }
  resultsdiv.innerHTML = "É um empate!";
  switch (userChoice) {
    case "r":
      rockdiv.style.borderColor = "darkgray";
      papeldiv.style.borderColor = "rgb(242, 232, 207)";
      tesouradiv.style.borderColor = "rgb(242, 232, 207)";
      break;
    case "p":
      rockdiv.style.borderColor = "rgb(242, 232, 207)";
      papeldiv.style.borderColor = "darkgray";
      tesouradiv.style.borderColor = "rgb(242, 232, 207)";
      break;
    case "s":
      rockdiv.style.borderColor = "rgb(242, 232, 207)";
      papeldiv.style.borderColor = "rgb(242, 232, 207)";
      tesouradiv.style.borderColor = "darkgray";
      break;
  }
}

function jogo(userChoice) {
  const escolhapc = escolhabot();
  switch (userChoice + escolhapc) {
    case "pr":
    case "rs":
    case "sp":
      win(userChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice);
      break;
  }
}

function buttons() {
  rockdiv.addEventListener("click", function () {
    jogo("r");
  });

  papeldiv.addEventListener("click", function () {
    jogo("p");
  });

  tesouradiv.addEventListener("click", function () {
    jogo("s");
  });
}

buttons();

restartbtn.addEventListener("click", function () {
  reset();
});
