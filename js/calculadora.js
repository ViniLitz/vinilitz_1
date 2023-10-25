let repeticoes = 1;
let numerodefatores = 0;
let fator = [];
let sinal = "";
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
const num0 = document.querySelector(".num0");
const raiz = document.querySelector(".raiz");
const clean = document.querySelector(".clean");
const apagar = document.querySelector(".apagar");
const porcentagem = document.querySelector(".porcentagem");
const divisao = document.querySelector(".divisao");
const multiplicacao = document.querySelector(".multiplicacao");
const mais = document.querySelector(".mais");
const menos = document.querySelector(".menos");
const calculo = document.querySelector(".calculo");
const igual = document.querySelector(".igual");
const calculotela = document.querySelector(".calculotela");
const calculointeiro = document.querySelector(".calculointeiro");
const ponto = document.querySelector(".ponto");

function numberbtns() {
  num1.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "1";
    calculointeiro.innerHTML = calculointeiro.innerHTML + "1";
  });

  num2.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "2";
    calculointeiro.innerHTML = calculointeiro.innerHTML + "2";
  });

  num3.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "3";
    calculointeiro.innerHTML = calculointeiro.innerHTML + "3";
  });

  num4.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "4";
    calculointeiro.innerHTML = calculointeiro.innerHTML + "4";
  });

  num5.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "5";
    calculointeiro.innerHTML = calculointeiro.innerHTML + "5";
  });

  num6.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "6";
    calculointeiro.innerHTML = calculointeiro.innerHTML + "6";
  });

  num7.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "7";
    calculointeiro.innerHTML = calculointeiro.innerHTML + "7";
  });

  num8.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "8";
    calculointeiro.innerHTML = calculointeiro.innerHTML + "8";
  });

  num9.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "9";
    calculointeiro.innerHTML = calculointeiro.innerHTML + "9";
  });

  num0.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + "0";
    calculointeiro.innerHTML = calculointeiro.innerHTML + "0";
  });
}
numberbtns();

function specialbtns() {
  apagar.addEventListener("click", () => {
    let calculo2 = calculo.innerHTML.slice(0, -1);
    let calculointeiro2 = calculointeiro.innerHTML.slice(0, -1);
    calculointeiro.innerHTML = calculointeiro2;
    calculo.innerHTML = calculo2;
  });

  clean.addEventListener("click", () => {
    calculo.innerHTML = "";
    calculointeiro.innerHTML = "";
    repeticoes = 1;
    numerodefatores = 0;
    fator = [];
    sinal = "";
  });

  mais.addEventListener("click", () => {
    sinal = "+";
    calculointeiro.innerHTML = calculointeiro.innerHTML + " + ";
    fator.push(calculo.innerHTML);
    calculo.innerHTML = "";
    numerodefatores++;
    console.log(fator[0] + "fator");
  });

  menos.addEventListener("click", () => {
    sinal = "-";
    calculointeiro.innerHTML = calculointeiro.innerHTML + " - ";
    fator.push(calculo.innerHTML);
    calculo.innerHTML = "";
    numerodefatores++;
    console.log(fator[0]);
  });

  multiplicacao.addEventListener("click", () => {
    sinal = "*";
    calculointeiro.innerHTML = calculointeiro.innerHTML + " * ";
    fator.push(calculo.innerHTML);
    calculo.innerHTML = "";
    numerodefatores++;
    console.log(fator[0]);
  });

  divisao.addEventListener("click", () => {
    sinal = "/";
    calculointeiro.innerHTML = calculointeiro.innerHTML + " / ";
    fator.push(calculo.innerHTML);
    calculo.innerHTML = "";
    numerodefatores++;
    console.log(fator[0]);
  });

  ponto.addEventListener("click", () => {
    calculo.innerHTML = calculo.innerHTML + ".";
    calculointeiro.innerHTML = calculointeiro.innerHTML + ".";
  });

  igual.addEventListener("click", () => {
    switch (sinal) {
      case "+":
        repeticoes = 1;
        if (numerodefatores >= 2) {
          while (numerodefatores - 1 >= repeticoes) {
            fator[0] = fator[0]++ + parseFloat(fator[repeticoes]);
            repeticoes++;
          }
        }
        console.log(numerodefatores);
        fator[0] = fator[0]++ + parseFloat(calculo.innerHTML);
        console.log(fator[0] + "fator");
        console.log(calculo.innerHTML + "calcinnerhtml");
        break;
      case "-":
        repeticoes = 1;
        if (numerodefatores >= 2) {
          while (numerodefatores - 1 >= repeticoes) {
            fator[0] = fator[0] - parseFloat(fator[repeticoes]);
            repeticoes++;
          }
        }
        console.log(numerodefatores);
        fator[0] = fator[0] - parseFloat(calculo.innerHTML);
        console.log(fator[0] + "fator");
        console.log(calculo.innerHTML + "calcinnerhtml");
        break;
      case "*":
        repeticoes = 1;
        if (numerodefatores >= 2) {
          while (numerodefatores - 1 >= repeticoes) {
            fator[0] = fator[0] * parseFloat(fator[repeticoes]);
            repeticoes++;
          }
        }
        console.log(numerodefatores);
        fator[0] = fator[0] * parseFloat(calculo.innerHTML);
        console.log(fator[0] + "fator");
        console.log(calculo.innerHTML + "calcinnerhtml");
        break;
      case "/":
        repeticoes = 1;
        if (numerodefatores >= 2) {
          while (numerodefatores - 1 >= repeticoes) {
            fator[0] = fator[0] / parseFloat(fator[repeticoes]);
            repeticoes++;
          }
        }
        console.log(numerodefatores);
        fator[0] = fator[0] / parseFloat(calculo.innerHTML);
        console.log(fator[0] + "fator");
        console.log(calculo.innerHTML + "calcinnerhtml");
        break;
      default:
    }
    console.log(fator[0]);
    calculo.innerHTML = fator[0];
    calculointeiro.innerHTML = calculointeiro.innerHTML + " = " + fator[0];
    repeticoes = 1;
    numerodefatores = 0;
    fator = [];
    sinal = "";
  });
}
specialbtns();
