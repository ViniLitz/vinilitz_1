let numero = 0;
const mais = document.querySelector(".mais");
const menos = document.querySelector(".menos");
const reset = document.querySelector(".reset");
const number = document.querySelector(".numero");

function soma() {
  numero++;
  number.innerHTML = numero;
}

function sub() {
  numero--;
  number.innerHTML = numero;
}

function resetar() {
  numero = 0;
  number.innerHTML = numero;
}

mais.addEventListener("click", function () {
  soma();
});

document.addEventListener("keydown", function (event) {
  const teclapressionada = event.key;
  if (teclapressionada === "ArrowUp" || " ") {
    soma();
  } else {
    if (teclapressionada === "ArrowDown") {
      sub();
    }
  }
});

menos.addEventListener("click", function () {
  sub();
});

reset.addEventListener("click", function () {
  resetar();
});
