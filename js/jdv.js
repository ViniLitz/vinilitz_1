let qua1color = "";
let qua2color = "";
let qua3color = "";
let qua4color = "";
let qua5color = "";
let qua6color = "";
let qua7color = "";
let qua8color = "";
let qua9color = "";
let ndqp = 0;
let vitoria = 0;
let qua1pre = 0;
let qua2pre = 0;
let qua3pre = 0;
let qua4pre = 0;
let qua5pre = 0;
let qua6pre = 0;
let qua7pre = 0;
let qua8pre = 0;
let qua9pre = 0;
let timebot = "";
let escolhave = "";
let escolhabot = "";
let vezde = "1";
const pvpbtn = document.querySelector(".pvpbtn");
const pvbotbtn = document.querySelector(".youvbotbtn");
const vexbtn = document.querySelector(".vexbtn");
const veobtn = document.querySelector(".veobtn");
const qua1 = document.querySelector(".qua1");
const qua2 = document.querySelector(".qua2");
const qua3 = document.querySelector(".qua3");
const qua4 = document.querySelector(".qua4");
const qua5 = document.querySelector(".qua5");
const qua6 = document.querySelector(".qua6");
const qua7 = document.querySelector(".qua7");
const qua8 = document.querySelector(".qua8");
const qua9 = document.querySelector(".qua9");
const vce = document.querySelector(".vce");
const cdj = document.querySelector(".cdj");
const restartbtn = document.querySelector(".restartbtn");
const quadradosdiv = document.querySelector(".quadradosdiv");

function restart() {
  restartbtn.style.display = "none";
  quadradosdiv.style.display = "none";
  vexbtn.style.display = "none";
  veobtn.style.display = "none";
  vce.style.display = "none";
  cdj.style.display = "block";
  vce.innerHTML = "Você é?";
  vce.style.color = "black";
  qua1.innerHTML = "-";
  qua2.innerHTML = "-";
  qua3.innerHTML = "-";
  qua4.innerHTML = "-";
  qua5.innerHTML = "-";
  qua6.innerHTML = "-";
  qua7.innerHTML = "-";
  qua8.innerHTML = "-";
  qua9.innerHTML = "-";
  pvpbtn.style.display = "inline-block";
  pvbotbtn.style.display = "inline-block";
  qua1.style.backgroundColor = "rgb(242, 232, 207)";
  qua1.style.color = "rgb(242, 232, 207)";
  qua2.style.backgroundColor = "rgb(242, 232, 207)";
  qua2.style.color = "rgb(242, 232, 207)";
  qua3.style.backgroundColor = "rgb(242, 232, 207)";
  qua3.style.color = "rgb(242, 232, 207)";
  qua4.style.backgroundColor = "rgb(242, 232, 207)";
  qua4.style.color = "rgb(242, 232, 207)";
  qua5.style.backgroundColor = "rgb(242, 232, 207)";
  qua5.style.color = "rgb(242, 232, 207)";
  qua6.style.backgroundColor = "rgb(242, 232, 207)";
  qua6.style.color = "rgb(242, 232, 207)";
  qua7.style.backgroundColor = "rgb(242, 232, 207)";
  qua7.style.color = "rgb(242, 232, 207)";
  qua8.style.backgroundColor = "rgb(242, 232, 207)";
  qua8.style.color = "rgb(242, 232, 207)";
  qua9.style.backgroundColor = "rgb(242, 232, 207)";
  qua9.style.color = "rgb(242, 232, 207)";
  qua1color = "";
  qua2color = "";
  qua3color = "";
  qua4color = "";
  qua5color = "";
  qua6color = "";
  qua7color = "";
  qua8color = "";
  qua9color = "";
  vitoria = 0;
  qua1pre = 0;
  qua2pre = 0;
  qua3pre = 0;
  qua4pre = 0;
  qua5pre = 0;
  qua6pre = 0;
  qua7pre = 0;
  qua8pre = 0;
  qua9pre = 0;
  ndqp = 0;
  vezde = "1";
  timebot = "";
  escolhabot = "";
}

function botchoice() {
  if (
    (qua3color === "x" && qua2color === "x" && qua1color === "x") ||
    (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
    (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
    (qua7color === "x" && qua4color === "x" && qua1color === "x") ||
    (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
    (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
    (qua9color === "x" && qua5color === "x" && qua1color === "x") ||
    (qua3color === "x" && qua5color === "x" && qua7color === "x") ||
    (qua3color === "o" && qua2color === "o" && qua1color === "o") ||
    (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
    (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
    (qua7color === "o" && qua4color === "o" && qua1color === "o") ||
    (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
    (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
    (qua9color === "o" && qua5color === "o" && qua1color === "o") ||
    (qua3color === "o" && qua5color === "o" && qua7color === "o")
  ) {
    vitoria = 1;
  }
  if (vitoria === 0) {
    if (ndqp >= 7 && ndqp <= 8) {
      console.log("gooooooooooooooooooooooooofy");
      const escolhasbot = [
        "qua1",
        "qua2",
        "qua3",
        "qua4",
        "qua5",
        "qua6",
        "qua7",
        "qua8",
        "qua9"
      ];
      const randomnumberonetonine = Math.floor(Math.random() * 9);
      timebot = 0;
      escolhabot = escolhasbot[randomnumberonetonine];
      console.log(escolhabot);
      botplay();
    } else {
      if (ndqp <= 7) {
        const escolhasbot = [
          "qua1",
          "qua2",
          "qua3",
          "qua4",
          "qua5",
          "qua6",
          "qua7",
          "qua8",
          "qua9"
        ];
        const randomnumberonetonine = Math.floor(Math.random() * 9);
        timebot = 0;
        escolhabot = escolhasbot[randomnumberonetonine];
        console.log(escolhabot);
        botplay();
      }
    }
  }
}

function botplay() {
  if (escolhave === "x") {
    switch (escolhabot) {
      case "qua1":
        if (qua1pre === 0) {
          qua1.style.backgroundColor = "rgb(167, 201, 50)";
          qua1.innerHTML = "O";
          qua1pre = 1;
          qua1color = "o";
          ndqp++;
        } else {
          botchoice();
        }
        break;
      case "qua2":
        if (qua2pre === 0) {
          qua2.style.backgroundColor = "rgb(167, 201, 50)";
          qua2.innerHTML = "O";
          qua2pre = 1;
          qua2color = "o";
          ndqp++;
        } else {
          botchoice();
        }
        break;
      case "qua3":
        if (qua3pre === 0) {
          qua3.style.backgroundColor = "rgb(167, 201, 50)";
          qua3.innerHTML = "O";
          qua3pre = 1;
          qua3color = "o";
          ndqp++;
        } else {
          botchoice();
        }
        break;
      case "qua4":
        if (qua4pre === 0) {
          qua4.style.backgroundColor = "rgb(167, 201, 50)";
          qua4.innerHTML = "O";
          qua4pre = 1;
          qua4color = "o";
          ndqp++;
        } else {
          botchoice();
        }
        break;
      case "qua5":
        if (qua5pre === 0) {
          qua5.style.backgroundColor = "rgb(167, 201, 50)";
          qua5.innerHTML = "O";
          qua5pre = 1;
          qua5color = "o";
          ndqp++;
        } else {
          botchoice();
        }
        break;
      case "qua6":
        if (qua6pre === 0) {
          qua6.style.backgroundColor = "rgb(167, 201, 50)";
          qua6.innerHTML = "O";
          qua6pre = 1;
          qua6color = "o";
          ndqp++;
        } else {
          botchoice();
        }
        break;
      case "qua7":
        if (qua7pre === 0) {
          qua7.style.backgroundColor = "rgb(167, 201, 50)";
          qua7.innerHTML = "O";
          qua7pre = 1;
          qua7color = "o";
          ndqp++;
        } else {
          botchoice();
        }
        break;
      case "qua8":
        if (qua8pre === 0) {
          qua8.style.backgroundColor = "rgb(167, 201, 50)";
          qua8.innerHTML = "O";
          qua8pre = 1;
          qua8color = "o";
          ndqp++;
        } else {
          botchoice();
        }
        break;
      case "qua9":
        if (qua9pre === 0) {
          qua9.style.backgroundColor = "rgb(167, 201, 50)";
          qua9.innerHTML = "O";
          qua9pre = 1;
          qua9color = "o";
          ndqp++;
        } else {
          botchoice();
        }
        break;
    }
  } else {
    if (escolhave === "o") {
      switch (escolhabot) {
        case "qua1":
          if (qua1pre === 0) {
            qua1.style.backgroundColor = "rgb(188, 71, 73)";
            qua1.innerHTML = "X";
            qua1pre = 1;
            qua1color = "x";
            ndqp++;
          } else {
            botchoice();
          }
          break;
        case "qua2":
          if (qua2pre === 0) {
            qua2.style.backgroundColor = "rgb(188, 71, 73)";
            qua2.innerHTML = "X";
            qua2pre = 1;
            qua2color = "x";
            ndqp++;
          } else {
            botchoice();
          }
          break;
        case "qua3":
          if (qua3pre === 0) {
            qua3.style.backgroundColor = "rgb(188, 71, 73)";
            qua3.innerHTML = "X";
            qua3pre = 1;
            qua3color = "x";
            ndqp++;
          } else {
            botchoice();
          }
          break;
        case "qua4":
          if (qua4pre === 0) {
            qua4.style.backgroundColor = "rgb(188, 71, 73)";
            qua4.innerHTML = "X";
            qua4pre = 1;
            qua4color = "x";
            ndqp++;
          } else {
            botchoice();
          }
          break;
        case "qua5":
          if (qua5pre === 0) {
            qua5.style.backgroundColor = "rgb(188, 71, 73)";
            qua5.innerHTML = "X";
            qua5pre = 1;
            qua5color = "x";
            ndqp++;
          } else {
            botchoice();
          }
          break;
        case "qua6":
          if (qua6pre === 0) {
            qua6.style.backgroundColor = "rgb(188, 71, 73)";
            qua6.innerHTML = "X";
            qua6pre = 1;
            qua6color = "x";
            ndqp++;
          } else {
            botchoice();
          }
          break;
        case "qua7":
          if (qua7pre === 0) {
            qua7.style.backgroundColor = "rgb(188, 71, 73)";
            qua7.innerHTML = "X";
            qua7pre = 1;
            qua7color = "x";
            ndqp++;
          } else {
            botchoice();
          }
          break;
        case "qua8":
          if (qua8pre === 0) {
            qua8.style.backgroundColor = "rgb(188, 71, 73)";
            qua8.innerHTML = "X";
            qua8pre = 1;
            qua8color = "x";
            ndqp++;
          } else {
            botchoice();
          }
          break;
        case "qua9":
          if (qua9pre === 0) {
            qua9.style.backgroundColor = "rgb(188, 71, 73)";
            qua9.innerHTML = "X";
            qua9pre = 1;
            qua9color = "x";
            ndqp++;
          } else {
            botchoice();
          }
          break;
      }
    }
  }
}

function youvbotfunc() {
  restartbtn.style.display = "inline-block";
  quadradosdiv.style.display = "inline-block";
  qua1color = "";
  qua2color = "";
  qua3color = "";
  qua4color = "";
  qua5color = "";
  qua6color = "";
  qua7color = "";
  qua8color = "";
  qua9color = "";
  vitoria = 0;
  qua1pre = 0;
  qua2pre = 0;
  qua3pre = 0;
  qua4pre = 0;
  qua5pre = 0;
  qua6pre = 0;
  qua7pre = 0;
  qua8pre = 0;
  qua9pre = 0;
  ndqp = 0;
  vezde = "1";
  timebot = "";
  escolhabot = "";
  vitoria = 0;
  timebot = 0;
  vexbtn.style.display = "inline-block";
  veobtn.style.display = "inline-block";

  vexbtn.addEventListener("click", function () {
    escolhave = "x";
    vexbtn.style.display = "none";
    veobtn.style.display = "none";
    vce.innerHTML = "Você é X";
    vce.style.color = "rgb(188, 71, 73)";
  });

  veobtn.addEventListener("click", function () {
    escolhave = "o";
    vexbtn.style.display = "none";
    veobtn.style.display = "none";
    vce.style.color = "rgb(167, 201, 50)";
    vce.innerHTML = "Você é O";
  });

  qua1.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua1pre === 0) {
        if (timebot === 0) {
          ndqp++;
          qua1pre = 1;
          switch (escolhave) {
            case "x":
              qua1.style.backgroundColor = "rgb(188, 71, 73)";
              qua1.innerHTML = "X";
              qua1color = "x";
              break;
            case "o":
              qua1.style.backgroundColor = "rgb(167, 201, 50)";
              qua1.innerHTML = "O";
              qua1color = "o";
              break;
          }
          timebot = 1;
          botchoice();
          if (
            (qua3color === "x" && qua2color === "x" && qua1color === "x") ||
            (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
            (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
            (qua7color === "x" && qua4color === "x" && qua1color === "x") ||
            (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
            (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
            (qua9color === "x" && qua5color === "x" && qua1color === "x") ||
            (qua3color === "x" && qua5color === "x" && qua7color === "x")
          ) {
            vce.style.color = "rgb(188, 71, 73)";
            vce.innerHTML = "X é o vencedor!";
            vitoria = 1;
          }
          if (
            (qua3color === "o" && qua2color === "o" && qua1color === "o") ||
            (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
            (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
            (qua7color === "o" && qua4color === "o" && qua1color === "o") ||
            (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
            (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
            (qua9color === "o" && qua5color === "o" && qua1color === "o") ||
            (qua3color === "o" && qua5color === "o" && qua7color === "o")
          ) {
            vce.style.color = "rgb(167, 201, 50)";
            vce.innerHTML = "O é o vencedor!";
            vitoria = 1;
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });

  qua2.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua2pre === 0) {
        if (timebot === 0) {
          ndqp++;
          qua2pre = 1;
          switch (escolhave) {
            case "x":
              qua2.style.backgroundColor = "rgb(188, 71, 73)";
              qua2.innerHTML = "X";
              qua2color = "x";
              break;
            case "o":
              qua2.style.backgroundColor = "rgb(167, 201, 50)";
              qua2.innerHTML = "O";
              qua2color = "o";
              break;
          }
          timebot = 1;
          botchoice();
          if (
            (qua1color === "x" && qua2color === "x" && qua3color === "x") ||
            (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
            (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
            (qua1color === "x" && qua4color === "x" && qua7color === "x") ||
            (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
            (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
            (qua1color === "x" && qua5color === "x" && qua9color === "x") ||
            (qua3color === "x" && qua5color === "x" && qua7color === "x")
          ) {
            vce.style.color = "rgb(188, 71, 73)";
            vce.innerHTML = "X é o vencedor!";
            vitoria = 1;
          }
          if (
            (qua1color === "o" && qua2color === "o" && qua3color === "o") ||
            (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
            (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
            (qua1color === "o" && qua4color === "o" && qua7color === "o") ||
            (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
            (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
            (qua1color === "o" && qua5color === "o" && qua9color === "o") ||
            (qua3color === "o" && qua5color === "o" && qua7color === "o")
          ) {
            vce.style.color = "rgb(167, 201, 50)";
            vce.innerHTML = "O é o vencedor!";
            vitoria = 1;
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });

  qua3.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua3pre === 0) {
        if (timebot === 0) {
          ndqp++;
          qua3pre = 1;
          switch (escolhave) {
            case "x":
              qua3.style.backgroundColor = "rgb(188, 71, 73)";
              qua3.innerHTML = "X";
              qua3color = "x";
              break;
            case "o":
              qua3.style.backgroundColor = "rgb(167, 201, 50)";
              qua3.innerHTML = "O";
              qua3color = "o";
              break;
          }
          timebot = 1;
          botchoice();
          if (
            (qua1color === "x" && qua2color === "x" && qua3color === "x") ||
            (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
            (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
            (qua1color === "x" && qua4color === "x" && qua7color === "x") ||
            (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
            (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
            (qua1color === "x" && qua5color === "x" && qua9color === "x") ||
            (qua3color === "x" && qua5color === "x" && qua7color === "x")
          ) {
            vce.style.color = "rgb(188, 71, 73)";
            vce.innerHTML = "X é o vencedor!";
            vitoria = 1;
          }
          if (
            (qua1color === "o" && qua2color === "o" && qua3color === "o") ||
            (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
            (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
            (qua1color === "o" && qua4color === "o" && qua7color === "o") ||
            (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
            (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
            (qua1color === "o" && qua5color === "o" && qua9color === "o") ||
            (qua3color === "o" && qua5color === "o" && qua7color === "o")
          ) {
            vce.style.color = "rgb(167, 201, 50)";
            vce.innerHTML = "O é o vencedor!";
            vitoria = 1;
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });

  qua4.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua4pre === 0) {
        if (timebot === 0) {
          ndqp++;
          qua4pre = 1;
          switch (escolhave) {
            case "x":
              qua4.style.backgroundColor = "rgb(188, 71, 73)";
              qua4.innerHTML = "X";
              qua4color = "x";
              break;
            case "o":
              qua4.style.backgroundColor = "rgb(167, 201, 50)";
              qua4.innerHTML = "O";
              qua4color = "o";
              break;
          }
          timebot = 1;
          botchoice();
          if (
            (qua1color === "x" && qua2color === "x" && qua3color === "x") ||
            (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
            (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
            (qua1color === "x" && qua4color === "x" && qua7color === "x") ||
            (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
            (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
            (qua1color === "x" && qua5color === "x" && qua9color === "x") ||
            (qua3color === "x" && qua5color === "x" && qua7color === "x")
          ) {
            vce.style.color = "rgb(188, 71, 73)";
            vce.innerHTML = "X é o vencedor!";
            vitoria = 1;
          }
          if (
            (qua1color === "o" && qua2color === "o" && qua3color === "o") ||
            (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
            (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
            (qua1color === "o" && qua4color === "o" && qua7color === "o") ||
            (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
            (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
            (qua1color === "o" && qua5color === "o" && qua9color === "o") ||
            (qua3color === "o" && qua5color === "o" && qua7color === "o")
          ) {
            vce.style.color = "rgb(167, 201, 50)";
            vce.innerHTML = "O é o vencedor!";
            vitoria = 1;
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });

  qua5.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua5pre === 0) {
        if (timebot === 0) {
          ndqp++;
          qua5pre = 1;
          switch (escolhave) {
            case "x":
              qua5.style.backgroundColor = "rgb(188, 71, 73)";
              qua5.innerHTML = "X";
              qua5color = "x";
              break;
            case "o":
              qua5.style.backgroundColor = "rgb(167, 201, 50)";
              qua5.innerHTML = "O";
              qua5color = "o";
              break;
          }
          timebot = 1;
          botchoice();
          if (
            (qua1color === "x" && qua2color === "x" && qua3color === "x") ||
            (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
            (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
            (qua1color === "x" && qua4color === "x" && qua7color === "x") ||
            (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
            (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
            (qua1color === "x" && qua5color === "x" && qua9color === "x") ||
            (qua3color === "x" && qua5color === "x" && qua7color === "x")
          ) {
            vce.style.color = "rgb(188, 71, 73)";
            vce.innerHTML = "X é o vencedor!";
            vitoria = 1;
          }
          if (
            (qua1color === "o" && qua2color === "o" && qua3color === "o") ||
            (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
            (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
            (qua1color === "o" && qua4color === "o" && qua7color === "o") ||
            (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
            (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
            (qua1color === "o" && qua5color === "o" && qua9color === "o") ||
            (qua3color === "o" && qua5color === "o" && qua7color === "o")
          ) {
            vce.style.color = "rgb(167, 201, 50)";
            vce.innerHTML = "O é o vencedor!";
            vitoria = 1;
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });

  qua6.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua6pre === 0) {
        if (timebot === 0) {
          ndqp++;
          qua6pre = 1;
          switch (escolhave) {
            case "x":
              qua6.style.backgroundColor = "rgb(188, 71, 73)";
              qua6.innerHTML = "X";
              qua6color = "x";
              break;
            case "o":
              qua6.style.backgroundColor = "rgb(167, 201, 50)";
              qua6.innerHTML = "O";
              qua6color = "o";
              break;
          }
          timebot = 1;
          botchoice();
          if (
            (qua1color === "x" && qua2color === "x" && qua3color === "x") ||
            (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
            (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
            (qua1color === "x" && qua4color === "x" && qua7color === "x") ||
            (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
            (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
            (qua1color === "x" && qua5color === "x" && qua9color === "x") ||
            (qua3color === "x" && qua5color === "x" && qua7color === "x")
          ) {
            vce.style.color = "rgb(188, 71, 73)";
            vce.innerHTML = "X é o vencedor!";
            vitoria = 1;
          }
          if (
            (qua1color === "o" && qua2color === "o" && qua3color === "o") ||
            (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
            (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
            (qua1color === "o" && qua4color === "o" && qua7color === "o") ||
            (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
            (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
            (qua1color === "o" && qua5color === "o" && qua9color === "o") ||
            (qua3color === "o" && qua5color === "o" && qua7color === "o")
          ) {
            vce.style.color = "rgb(167, 201, 50)";
            vce.innerHTML = "O é o vencedor!";
            vitoria = 1;
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });

  qua7.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua7pre === 0) {
        if (timebot === 0) {
          ndqp++;
          qua7pre = 1;
          switch (escolhave) {
            case "x":
              qua7.style.backgroundColor = "rgb(188, 71, 73)";
              qua7.innerHTML = "X";
              qua7color = "x";
              break;
            case "o":
              qua7.style.backgroundColor = "rgb(167, 201, 50)";
              qua7.innerHTML = "O";
              qua7color = "o";
              break;
          }
          timebot = 1;
          botchoice();
          if (
            (qua1color === "x" && qua2color === "x" && qua3color === "x") ||
            (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
            (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
            (qua1color === "x" && qua4color === "x" && qua7color === "x") ||
            (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
            (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
            (qua1color === "x" && qua5color === "x" && qua9color === "x") ||
            (qua3color === "x" && qua5color === "x" && qua7color === "x")
          ) {
            vce.style.color = "rgb(188, 71, 73)";
            vce.innerHTML = "X é o vencedor!";
            vitoria = 1;
          }
          if (
            (qua1color === "o" && qua2color === "o" && qua3color === "o") ||
            (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
            (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
            (qua1color === "o" && qua4color === "o" && qua7color === "o") ||
            (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
            (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
            (qua1color === "o" && qua5color === "o" && qua9color === "o") ||
            (qua3color === "o" && qua5color === "o" && qua7color === "o")
          ) {
            vce.style.color = "rgb(167, 201, 50)";
            vce.innerHTML = "O é o vencedor!";
            vitoria = 1;
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });

  qua8.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua8pre === 0) {
        if (timebot === 0) {
          ndqp++;
          qua8pre = 1;
          switch (escolhave) {
            case "x":
              qua8.style.backgroundColor = "rgb(188, 71, 73)";
              qua8.innerHTML = "X";
              qua8color = "x";
              break;
            case "o":
              qua8.style.backgroundColor = "rgb(167, 201, 50)";
              qua8.innerHTML = "O";
              qua8color = "o";
              break;
          }
          timebot = 1;
          botchoice();
          if (
            (qua1color === "x" && qua2color === "x" && qua3color === "x") ||
            (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
            (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
            (qua1color === "x" && qua4color === "x" && qua7color === "x") ||
            (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
            (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
            (qua1color === "x" && qua5color === "x" && qua9color === "x") ||
            (qua3color === "x" && qua5color === "x" && qua7color === "x")
          ) {
            vce.style.color = "rgb(188, 71, 73)";
            vce.innerHTML = "X é o vencedor!";
            vitoria = 1;
          }
          if (
            (qua1color === "o" && qua2color === "o" && qua3color === "o") ||
            (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
            (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
            (qua1color === "o" && qua4color === "o" && qua7color === "o") ||
            (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
            (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
            (qua1color === "o" && qua5color === "o" && qua9color === "o") ||
            (qua3color === "o" && qua5color === "o" && qua7color === "o")
          ) {
            vce.style.color = "rgb(167, 201, 50)";
            vce.innerHTML = "O é o vencedor!";
            vitoria = 1;
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });

  qua9.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua9pre === 0) {
        if (timebot === 0) {
          ndqp++;
          qua9pre = 1;
          switch (escolhave) {
            case "x":
              qua9.style.backgroundColor = "rgb(188, 71, 73)";
              qua9.innerHTML = "X";
              qua9color = "x";
              break;
            case "o":
              qua9.style.backgroundColor = "rgb(167, 201, 50)";
              qua9.innerHTML = "O";
              qua9color = "o";
              break;
          }
          timebot = 1;
          botchoice();
          if (
            (qua1color === "x" && qua2color === "x" && qua3color === "x") ||
            (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
            (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
            (qua1color === "x" && qua4color === "x" && qua7color === "x") ||
            (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
            (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
            (qua1color === "x" && qua5color === "x" && qua9color === "x") ||
            (qua3color === "x" && qua5color === "x" && qua7color === "x")
          ) {
            vce.style.color = "rgb(188, 71, 73)";
            vce.innerHTML = "X é o vencedor!";
            vitoria = 1;
          }
          if (
            (qua1color === "o" && qua2color === "o" && qua3color === "o") ||
            (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
            (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
            (qua1color === "o" && qua4color === "o" && qua7color === "o") ||
            (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
            (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
            (qua1color === "o" && qua5color === "o" && qua9color === "o") ||
            (qua3color === "o" && qua5color === "o" && qua7color === "o")
          ) {
            vce.style.color = "rgb(167, 201, 50)";
            vce.innerHTML = "O é o vencedor!";
            vitoria = 1;
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });
}

function pvpfunc() {
  restartbtn.style.display = "inline-block";
  quadradosdiv.style.display = "inline-block";
  qua1color = "";
  qua2color = "";
  qua3color = "";
  qua4color = "";
  qua5color = "";
  qua6color = "";
  qua7color = "";
  qua8color = "";
  qua9color = "";
  vitoria = 0;
  qua1pre = 0;
  qua2pre = 0;
  qua3pre = 0;
  qua4pre = 0;
  qua5pre = 0;
  qua6pre = 0;
  qua7pre = 0;
  qua8pre = 0;
  qua9pre = 0;
  ndqp = 0;
  vezde = "1";
  timebot = "";
  escolhabot = "";
  vce.style.display = "block";
  cdj.style.display = "none";
  pvbotbtn.style.display = "none";
  pvpbtn.style.display = "none";
  vce.innerHTML = "O Player 1 é?";
  vexbtn.style.display = "inline-block";
  veobtn.style.display = "inline-block";

  vexbtn.addEventListener("click", function () {
    escolhave = "x";
    vexbtn.style.display = "none";
    veobtn.style.display = "none";
    vce.innerHTML = "Vez de Player 1 (X)";
    vce.style.color = "rgb(188, 71, 73)";
  });

  veobtn.addEventListener("click", function () {
    escolhave = "o";
    vexbtn.style.display = "none";
    veobtn.style.display = "none";
    vce.style.color = "rgb(167, 201, 50)";
    vce.innerHTML = "Vez de Player 1 (O)";
  });

  qua1.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua1pre === 0) {
        ndqp++;
        qua1pre = 1;
        switch (escolhave + vezde) {
          case "x1":
            qua1.style.backgroundColor = "rgb(188, 71, 73)";
            qua1.innerHTML = "X";
            qua1color = "x";
            break;
          case "x2":
            qua1.style.backgroundColor = "rgb(167, 201, 50)";
            qua1.innerHTML = "O";
            qua1color = "o";
          case "o1":
            qua1.style.backgroundColor = "rgb(167, 201, 50)";
            qua1.innerHTML = "O";
            qua1color = "o";
            break;
          case "o2":
            qua1.style.backgroundColor = "rgb(188, 71, 73)";
            qua1.innerHTML = "X";
            qua1color = "x";
            break;
        }
        if (
          (qua3color === "x" && qua2color === "x" && qua1color === "x") ||
          (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
          (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
          (qua7color === "x" && qua4color === "x" && qua1color === "x") ||
          (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
          (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
          (qua9color === "x" && qua5color === "x" && qua1color === "x") ||
          (qua3color === "x" && qua5color === "x" && qua7color === "x")
        ) {
          vce.style.color = "rgb(188, 71, 73)";
          vce.innerHTML = "X é o vencedor!";
          vitoria = 1;
        }
        if (
          (qua3color === "o" && qua2color === "o" && qua1color === "o") ||
          (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
          (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
          (qua7color === "o" && qua4color === "o" && qua1color === "o") ||
          (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
          (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
          (qua9color === "o" && qua5color === "o" && qua1color === "o") ||
          (qua3color === "o" && qua5color === "o" && qua7color === "o")
        ) {
          vce.style.color = "rgb(167, 201, 50)";
          vce.innerHTML = "O é o vencedor!";
          vitoria = 1;
        }
        if (vezde === "1") {
          vezde = "2";
        } else {
          vezde = "1";
        }
        if (vitoria === 0) {
          if (vezde === "1" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 1 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (vezde === "1" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 1 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 2 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 2 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });
  qua2.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua2pre === 0) {
        ndqp++;
        qua2pre = 1;
        switch (escolhave + vezde) {
          case "x1":
            qua2.style.backgroundColor = "rgb(188, 71, 73)";
            qua2.innerHTML = "X";
            qua2color = "x";
            break;
          case "x2":
            qua2.style.backgroundColor = "rgb(167, 201, 50)";
            qua2.innerHTML = "O";
            qua2color = "o";
          case "o1":
            qua2.style.backgroundColor = "rgb(167, 201, 50)";
            qua2.innerHTML = "O";
            qua2color = "o";
            break;
          case "o2":
            qua2.style.backgroundColor = "rgb(188, 71, 73)";
            qua2.innerHTML = "X";
            qua2color = "x";
            break;
        }
        if (
          (qua3color === "x" && qua2color === "x" && qua1color === "x") ||
          (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
          (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
          (qua7color === "x" && qua4color === "x" && qua1color === "x") ||
          (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
          (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
          (qua9color === "x" && qua5color === "x" && qua1color === "x") ||
          (qua3color === "x" && qua5color === "x" && qua7color === "x")
        ) {
          vce.style.color = "rgb(188, 71, 73)";
          vce.innerHTML = "X é o vencedor!";
          vitoria = 1;
        }
        if (
          (qua3color === "o" && qua2color === "o" && qua1color === "o") ||
          (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
          (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
          (qua7color === "o" && qua4color === "o" && qua1color === "o") ||
          (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
          (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
          (qua9color === "o" && qua5color === "o" && qua1color === "o") ||
          (qua3color === "o" && qua5color === "o" && qua7color === "o")
        ) {
          vce.style.color = "rgb(167, 201, 50)";
          vce.innerHTML = "O é o vencedor!";
          vitoria = 1;
        }
        if (vezde === "1") {
          vezde = "2";
        } else {
          vezde = "1";
        }
        if (vitoria === 0) {
          if (vezde === "1" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 1 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (vezde === "1" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 1 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 2 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 2 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });
  qua3.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua3pre === 0) {
        ndqp++;
        qua3pre = 1;
        switch (escolhave + vezde) {
          case "x1":
            qua3.style.backgroundColor = "rgb(188, 71, 73)";
            qua3.innerHTML = "X";
            qua3color = "x";
            break;
          case "x2":
            qua3.style.backgroundColor = "rgb(167, 201, 50)";
            qua3.innerHTML = "O";
            qua3color = "o";
          case "o1":
            qua3.style.backgroundColor = "rgb(167, 201, 50)";
            qua3.innerHTML = "O";
            qua3color = "o";
            break;
          case "o2":
            qua3.style.backgroundColor = "rgb(188, 71, 73)";
            qua3.innerHTML = "X";
            qua3color = "x";
            break;
        }
        if (
          (qua3color === "x" && qua2color === "x" && qua1color === "x") ||
          (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
          (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
          (qua7color === "x" && qua4color === "x" && qua1color === "x") ||
          (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
          (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
          (qua9color === "x" && qua5color === "x" && qua1color === "x") ||
          (qua3color === "x" && qua5color === "x" && qua7color === "x")
        ) {
          vce.style.color = "rgb(188, 71, 73)";
          vce.innerHTML = "X é o vencedor!";
          vitoria = 1;
        }
        if (
          (qua3color === "o" && qua2color === "o" && qua1color === "o") ||
          (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
          (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
          (qua7color === "o" && qua4color === "o" && qua1color === "o") ||
          (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
          (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
          (qua9color === "o" && qua5color === "o" && qua1color === "o") ||
          (qua3color === "o" && qua5color === "o" && qua7color === "o")
        ) {
          vce.style.color = "rgb(167, 201, 50)";
          vce.innerHTML = "O é o vencedor!";
          vitoria = 1;
        }
        if (vezde === "1") {
          vezde = "2";
        } else {
          vezde = "1";
        }
        if (vitoria === 0) {
          if (vezde === "1" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 1 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (vezde === "1" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 1 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 2 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 2 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });
  qua4.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua4pre === 0) {
        ndqp++;
        qua4pre = 1;
        switch (escolhave + vezde) {
          case "x1":
            qua4.style.backgroundColor = "rgb(188, 71, 73)";
            qua4.innerHTML = "X";
            qua4color = "x";
            break;
          case "x2":
            qua4.style.backgroundColor = "rgb(167, 201, 50)";
            qua4.innerHTML = "O";
            qua4color = "o";
          case "o1":
            qua4.style.backgroundColor = "rgb(167, 201, 50)";
            qua4.innerHTML = "O";
            qua4color = "o";
            break;
          case "o2":
            qua4.style.backgroundColor = "rgb(188, 71, 73)";
            qua4.innerHTML = "X";
            qua4color = "x";
            break;
        }
        if (
          (qua3color === "x" && qua2color === "x" && qua1color === "x") ||
          (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
          (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
          (qua7color === "x" && qua4color === "x" && qua1color === "x") ||
          (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
          (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
          (qua9color === "x" && qua5color === "x" && qua1color === "x") ||
          (qua3color === "x" && qua5color === "x" && qua7color === "x")
        ) {
          vce.style.color = "rgb(188, 71, 73)";
          vce.innerHTML = "X é o vencedor!";
          vitoria = 1;
        }
        if (
          (qua3color === "o" && qua2color === "o" && qua1color === "o") ||
          (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
          (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
          (qua7color === "o" && qua4color === "o" && qua1color === "o") ||
          (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
          (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
          (qua9color === "o" && qua5color === "o" && qua1color === "o") ||
          (qua3color === "o" && qua5color === "o" && qua7color === "o")
        ) {
          vce.style.color = "rgb(167, 201, 50)";
          vce.innerHTML = "O é o vencedor!";
          vitoria = 1;
        }
        if (vezde === "1") {
          vezde = "2";
        } else {
          vezde = "1";
        }
        if (vitoria === 0) {
          if (vezde === "1" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 1 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (vezde === "1" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 1 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 2 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 2 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });
  qua5.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua5pre === 0) {
        ndqp++;
        qua5pre = 1;
        switch (escolhave + vezde) {
          case "x1":
            qua5.style.backgroundColor = "rgb(188, 71, 73)";
            qua5.innerHTML = "X";
            qua5color = "x";
            break;
          case "x2":
            qua5.style.backgroundColor = "rgb(167, 201, 50)";
            qua5.innerHTML = "O";
            qua5color = "o";
          case "o1":
            qua5.style.backgroundColor = "rgb(167, 201, 50)";
            qua5.innerHTML = "O";
            qua5color = "o";
            break;
          case "o2":
            qua5.style.backgroundColor = "rgb(188, 71, 73)";
            qua5.innerHTML = "X";
            qua5color = "x";
            break;
        }
        if (
          (qua3color === "x" && qua2color === "x" && qua1color === "x") ||
          (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
          (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
          (qua7color === "x" && qua4color === "x" && qua1color === "x") ||
          (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
          (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
          (qua9color === "x" && qua5color === "x" && qua1color === "x") ||
          (qua3color === "x" && qua5color === "x" && qua7color === "x")
        ) {
          vce.style.color = "rgb(188, 71, 73)";
          vce.innerHTML = "X é o vencedor!";
          vitoria = 1;
        }
        if (
          (qua3color === "o" && qua2color === "o" && qua1color === "o") ||
          (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
          (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
          (qua7color === "o" && qua4color === "o" && qua1color === "o") ||
          (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
          (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
          (qua9color === "o" && qua5color === "o" && qua1color === "o") ||
          (qua3color === "o" && qua5color === "o" && qua7color === "o")
        ) {
          vce.style.color = "rgb(167, 201, 50)";
          vce.innerHTML = "O é o vencedor!";
          vitoria = 1;
        }
        if (vezde === "1") {
          vezde = "2";
        } else {
          vezde = "1";
        }
        if (vitoria === 0) {
          if (vezde === "1" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 1 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (vezde === "1" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 1 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 2 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 2 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });
  qua6.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua6pre === 0) {
        ndqp++;
        qua6pre = 1;
        switch (escolhave + vezde) {
          case "x1":
            qua6.style.backgroundColor = "rgb(188, 71, 73)";
            qua6.innerHTML = "X";
            qua6color = "x";
            break;
          case "x2":
            qua6.style.backgroundColor = "rgb(167, 201, 50)";
            qua6.innerHTML = "O";
            qua6color = "o";
          case "o1":
            qua6.style.backgroundColor = "rgb(167, 201, 50)";
            qua6.innerHTML = "O";
            qua6color = "o";
            break;
          case "o2":
            qua6.style.backgroundColor = "rgb(188, 71, 73)";
            qua6.innerHTML = "X";
            qua6color = "x";
            break;
        }
        if (
          (qua3color === "x" && qua2color === "x" && qua1color === "x") ||
          (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
          (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
          (qua7color === "x" && qua4color === "x" && qua1color === "x") ||
          (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
          (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
          (qua9color === "x" && qua5color === "x" && qua1color === "x") ||
          (qua3color === "x" && qua5color === "x" && qua7color === "x")
        ) {
          vce.style.color = "rgb(188, 71, 73)";
          vce.innerHTML = "X é o vencedor!";
          vitoria = 1;
        }
        if (
          (qua3color === "o" && qua2color === "o" && qua1color === "o") ||
          (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
          (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
          (qua7color === "o" && qua4color === "o" && qua1color === "o") ||
          (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
          (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
          (qua9color === "o" && qua5color === "o" && qua1color === "o") ||
          (qua3color === "o" && qua5color === "o" && qua7color === "o")
        ) {
          vce.style.color = "rgb(167, 201, 50)";
          vce.innerHTML = "O é o vencedor!";
          vitoria = 1;
        }
        if (vezde === "1") {
          vezde = "2";
        } else {
          vezde = "1";
        }
        if (vitoria === 0) {
          if (vezde === "1" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 1 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (vezde === "1" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 1 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 2 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 2 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });
  qua7.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua7pre === 0) {
        ndqp++;
        qua7pre = 1;
        switch (escolhave + vezde) {
          case "x1":
            qua7.style.backgroundColor = "rgb(188, 71, 73)";
            qua7.innerHTML = "X";
            qua7color = "x";
            break;
          case "x2":
            qua7.style.backgroundColor = "rgb(167, 201, 50)";
            qua7.innerHTML = "O";
            qua7color = "o";
          case "o1":
            qua7.style.backgroundColor = "rgb(167, 201, 50)";
            qua7.innerHTML = "O";
            qua7color = "o";
            break;
          case "o2":
            qua7.style.backgroundColor = "rgb(188, 71, 73)";
            qua7.innerHTML = "X";
            qua7color = "x";
            break;
        }
        if (
          (qua3color === "x" && qua2color === "x" && qua1color === "x") ||
          (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
          (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
          (qua7color === "x" && qua4color === "x" && qua1color === "x") ||
          (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
          (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
          (qua9color === "x" && qua5color === "x" && qua1color === "x") ||
          (qua3color === "x" && qua5color === "x" && qua7color === "x")
        ) {
          vce.style.color = "rgb(188, 71, 73)";
          vce.innerHTML = "X é o vencedor!";
          vitoria = 1;
        }
        if (
          (qua3color === "o" && qua2color === "o" && qua1color === "o") ||
          (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
          (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
          (qua7color === "o" && qua4color === "o" && qua1color === "o") ||
          (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
          (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
          (qua9color === "o" && qua5color === "o" && qua1color === "o") ||
          (qua3color === "o" && qua5color === "o" && qua7color === "o")
        ) {
          vce.style.color = "rgb(167, 201, 50)";
          vce.innerHTML = "O é o vencedor!";
          vitoria = 1;
        }
        if (vezde === "1") {
          vezde = "2";
        } else {
          vezde = "1";
        }
        if (vitoria === 0) {
          if (vezde === "1" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 1 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (vezde === "1" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 1 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 2 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 2 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });
  qua8.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua8pre === 0) {
        ndqp++;
        qua8pre = 1;
        switch (escolhave + vezde) {
          case "x1":
            qua8.style.backgroundColor = "rgb(188, 71, 73)";
            qua8.innerHTML = "X";
            qua8color = "x";
            break;
          case "x2":
            qua8.style.backgroundColor = "rgb(167, 201, 50)";
            qua8.innerHTML = "O";
            qua8color = "o";
          case "o1":
            qua8.style.backgroundColor = "rgb(167, 201, 50)";
            qua8.innerHTML = "O";
            qua8color = "o";
            break;
          case "o2":
            qua8.style.backgroundColor = "rgb(188, 71, 73)";
            qua8.innerHTML = "X";
            qua8color = "x";
            break;
        }
        if (
          (qua3color === "x" && qua2color === "x" && qua1color === "x") ||
          (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
          (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
          (qua7color === "x" && qua4color === "x" && qua1color === "x") ||
          (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
          (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
          (qua9color === "x" && qua5color === "x" && qua1color === "x") ||
          (qua3color === "x" && qua5color === "x" && qua7color === "x")
        ) {
          vce.style.color = "rgb(188, 71, 73)";
          vce.innerHTML = "X é o vencedor!";
          vitoria = 1;
        }
        if (
          (qua3color === "o" && qua2color === "o" && qua1color === "o") ||
          (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
          (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
          (qua7color === "o" && qua4color === "o" && qua1color === "o") ||
          (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
          (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
          (qua9color === "o" && qua5color === "o" && qua1color === "o") ||
          (qua3color === "o" && qua5color === "o" && qua7color === "o")
        ) {
          vce.style.color = "rgb(167, 201, 50)";
          vce.innerHTML = "O é o vencedor!";
          vitoria = 1;
        }
        if (vezde === "1") {
          vezde = "2";
        } else {
          vezde = "1";
        }
        if (vitoria === 0) {
          if (vezde === "1" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 1 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (vezde === "1" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 1 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 2 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 2 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });
  qua9.addEventListener("click", function () {
    if (vitoria === 0) {
      if (qua9pre === 0) {
        ndqp++;
        qua9pre = 1;
        switch (escolhave + vezde) {
          case "x1":
            qua9.style.backgroundColor = "rgb(188, 71, 73)";
            qua9.innerHTML = "X";
            qua9color = "x";
            break;
          case "x2":
            qua9.style.backgroundColor = "rgb(167, 201, 50)";
            qua9.innerHTML = "O";
            qua9color = "o";
          case "o1":
            qua9.style.backgroundColor = "rgb(167, 201, 50)";
            qua9.innerHTML = "O";
            qua4color = "o";
            break;
          case "o2":
            qua9.style.backgroundColor = "rgb(188, 71, 73)";
            qua9.innerHTML = "X";
            qua9color = "x";
            break;
        }
        if (
          (qua3color === "x" && qua2color === "x" && qua1color === "x") ||
          (qua4color === "x" && qua5color === "x" && qua6color === "x") ||
          (qua7color === "x" && qua8color === "x" && qua9color === "x") ||
          (qua7color === "x" && qua4color === "x" && qua1color === "x") ||
          (qua2color === "x" && qua5color === "x" && qua8color === "x") ||
          (qua3color === "x" && qua6color === "x" && qua9color === "x") ||
          (qua9color === "x" && qua5color === "x" && qua1color === "x") ||
          (qua3color === "x" && qua5color === "x" && qua7color === "x")
        ) {
          vce.style.color = "rgb(188, 71, 73)";
          vce.innerHTML = "X é o vencedor!";
          vitoria = 1;
        }
        if (
          (qua3color === "o" && qua2color === "o" && qua1color === "o") ||
          (qua4color === "o" && qua5color === "o" && qua6color === "o") ||
          (qua7color === "o" && qua8color === "o" && qua9color === "o") ||
          (qua7color === "o" && qua4color === "o" && qua1color === "o") ||
          (qua2color === "o" && qua5color === "o" && qua8color === "o") ||
          (qua3color === "o" && qua6color === "o" && qua9color === "o") ||
          (qua9color === "o" && qua5color === "o" && qua1color === "o") ||
          (qua3color === "o" && qua5color === "o" && qua7color === "o")
        ) {
          vce.style.color = "rgb(167, 201, 50)";
          vce.innerHTML = "O é o vencedor!";
          vitoria = 1;
        }
        if (vezde === "1") {
          vezde = "2";
        } else {
          vezde = "1";
        }
        if (vitoria === 0) {
          if (vezde === "1" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 1 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (vezde === "1" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 1 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "o") {
            vce.innerHTML = "Vez de Player 2 (X)";
            vce.style.color = "rgb(188, 71, 73)";
          }
          if (vezde === "2" && escolhave === "x") {
            vce.innerHTML = "Vez de Player 2 (O)";
            vce.style.color = "rgb(167, 201, 50)";
          }
          if (ndqp >= 9 && vitoria === 0) {
            vce.innerHTML = "Deu velha! (empate)";
            vce.style.color = "rgb(242, 232, 207)";
          }
        }
      }
    }
  });
}

pvpbtn.addEventListener("click", function () {
  pvpfunc();
});

pvbotbtn.addEventListener("click", function () {
  youvbotfunc();
  vce.style.display = "block";
  cdj.style.display = "none";
  pvbotbtn.style.display = "none";
  pvpbtn.style.display = "none";
});

restartbtn.addEventListener("click", function () {
  restart();
});
