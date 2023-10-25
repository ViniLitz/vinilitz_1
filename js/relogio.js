const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function clock() {
  const horas = new Date();
  hours.innerHTML = horas.getHours() + ":";
  minutes.innerHTML = horas.getMinutes() + ":";
  seconds.innerHTML = horas.getSeconds();
  setTimeout(() => {
    clock();
  }, 1000);
}

clock();
