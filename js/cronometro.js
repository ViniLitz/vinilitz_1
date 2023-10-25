let minsnumber = 0;
let secnumber = 0;
let milinumber = 0;
let stop = 0;
const cmcbtn = document.querySelector(".cmc");
const pause = document.querySelector(".pause");
const seconds = document.querySelector(".seconds");
const milispan = document.querySelector(".mili");
const pararbtn = document.querySelector(".parar");
const mins = document.querySelector(".mins");

function cmc() {
  const minsinp = document.querySelector(".minsinp").value;
  const secsinp = document.querySelector(".secinp").value;
  const milisinp = document.querySelector(".miliinp").value;
  if (secsinp !== "") {
    if (secsinp <= secnumber) {
      stop = 1;
      milinumber--;
    }
  }
  if (minsinp !== "") {
    if (minsinp <= minsnumber) {
      stop = 1;
      milinumber--;
    }
  }
  if (milisinp !== "") {
    if (milisinp <= milinumber) {
      stop = 1;
      milinumber--;
    }
  }
  if (secnumber === 60) {
    secnumber = 0;
    seconds.innerHTML = secnumber;
    minsnumber++;
    mins.innerHTML = minsnumber;
  }
  seconds.innerHTML = secnumber;
  milinumber++;
  milispan.innerHTML = milinumber;
  if (stop === 0) {
    setTimeout(() => {
      cmc();
    }, 10);
    if (milinumber === 100) {
      milinumber = 0;
      secnumber++;
      seconds.innerHTML = secnumber;
    }
  }
}

function cmc2() {
  stop = 0;
  cmcbtn.innerHTML = "começar";
  var cmchidden = (document.querySelector(".cmc").hidden = true);
  var pausehidden = (document.querySelector(".pause").hidden = false);
  var stophidden = (document.querySelector(".parar").hidden = false);
}

function hide() {
  var pausehidden = (document.querySelector(".pause").hidden = true);
  var stophidden = (document.querySelector(".parar").hidden = true);
}
hide();

function parar() {
  var cmchidden = (document.querySelector(".cmc").hidden = false);
  cmcbtn.innerHTML = "Começar";
  var pausehidden = (document.querySelector(".pause").hidden = true);
  var stophidden = (document.querySelector(".parar").hidden = true);
  milinumber = -1;
  secnumber = 0;
  minsnumber = 0;
  stop = 1;
}

cmcbtn.addEventListener("click", function () {
  cmc2();
  cmc();
});

pause.addEventListener("click", function () {
  var cmchidden = (document.querySelector(".cmc").hidden = false);
  cmcbtn.innerHTML = "Retomar";
  var pausehidden = (document.querySelector(".pause").hidden = true);
  stop = 1;
});

pararbtn.addEventListener("click", function () {
  parar();
});
