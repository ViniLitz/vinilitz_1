let youpontos = 0;
let botpontos = 0;
const pontos = document.querySelector(".pontos");
const youpontosspan = document.querySelector("#yourscore");
const botpontosspan = document.querySelector("#botscore");
const resultsdiv = document.querySelector(".resultp");
const caradiv = document.getElementById("cara");
const coroadiv = document.getElementById("coroa");
const restartbtn = document.querySelector(".restartbtn");

function escolhabot() {
  const escolhas = ["co", "ca"];
  const randomnumber = Math.floor(Math.random() * 2);
  return escolhas[randomnumber];
}

function jogo(userChoice) {
  const escolhapc = escolhabot();
  switch (userChoice + escolhapc) {
    case "caco":
    case "coca":
      lose(userChoice);
      break;
    case "caca":
    case "coco":
      win(userChoice);
      break;
  }
}
function lose(userChoice) {
  botpontos++;
  botpontosspan.innerHTML = botpontos;
  resultsdiv.innerHTML = "Você perdeu!";
  switch (userChoice) {
    case "ca":
      caradiv.style.borderColor = "red";
      coroadiv.style.borderColor = "rgb(242, 232, 207";
      break;
    case "co":
      coroadiv.style.borderColor = "red";
      caradiv.style.borderColor = "rgb(242, 232, 207";
      break;
  }
}

function win(userChoice) {
  youpontos++;
  youpontosspan.innerHTML = youpontos;
  resultsdiv.innerHTML = "Você venceu!";
  switch (userChoice) {
    case "ca":
      caradiv.style.borderColor = "green";
      coroadiv.style.borderColor = "rgb(242, 232, 207)";
      break;
    case "co":
      coroadiv.style.borderColor = "green";
      caradiv.style.borderColor = "rgb(242, 232, 207)";
      break;
  }
}

function buttons() {
  caradiv.addEventListener("click", function () {
    jogo("ca");
  });

  coroadiv.addEventListener("click", function () {
    jogo("co");
  });
}

buttons();

restartbtn.addEventListener("click", function () {
  youpontosspan.innerHTML = "0";
  botpontosspan.innerHTML = "0";
  coroadiv.style.borderColor = "rgb(242, 232, 207)";
  caradiv.style.borderColor = "rgb(242, 232, 207)";
  youpontos = 0;
  botpontos = 0;
});
