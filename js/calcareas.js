const resultstridiv = document.querySelector(".resultstri");
const btntriresults = document.querySelector(".btntri");

function calctri() {
  const basetri = document.querySelector(".basetri").value;
  const alturatri = document.querySelector(".alturatri").value;
  const resulttri = (basetri * alturatri) / 2;
  resultstridiv.innerHTML =
    "A área total deste triângulo é: " + resulttri + " Cm²";
}

btntriresults.addEventListener("click", function () {
  calctri();
});

const resultsquadiv = document.querySelector(".resultsqua");
const btnquaresults = document.querySelector(".btnqua");

function calcqua() {
  const ladoqua = document.querySelector(".ladoqua").value;
  const resultqua = ladoqua * ladoqua;
  resultsquadiv.innerHTML =
    "A área total deste quadrado é: " + resultqua + " Cm²";
}

btnquaresults.addEventListener("click", function () {
  calcqua();
});

const resultsretdiv = document.querySelector(".resultsret");
const btnretresults = document.querySelector(".btnret");

function calcret() {
  const basetri = document.querySelector(".baseret").value;
  const alturatri = document.querySelector(".alturaret").value;
  const resultret = basetri * alturatri;
  resultsretdiv.innerHTML =
    "A área total deste retângulo é: " + resultret + " Cm²";
}

btnretresults.addEventListener("click", function () {
  calcret();
});

const resultscirdiv = document.querySelector(".resultscir");
const btncirresults = document.querySelector(".btncir");

function calccir() {
  const raiocir = document.querySelector(".raiocir").value;
  const resultcir = 3.14 * (raiocir * raiocir);
  resultscirdiv.innerHTML =
    "A área total deste círculo é: " + resultcir + " Cm² (Aproximadamente)";
}

btncirresults.addEventListener("click", function () {
  calccir();
});

const explitri = document.querySelector(".explitri");
const expliqua = document.querySelector(".expliqua");
const expliret = document.querySelector(".expliret");
const explicir = document.querySelector(".explicir");

const closetribtn = document.querySelector(".closetri");
const closequabtn = document.querySelector(".closequa");
const closeretbtn = document.querySelector(".closeret");
const closecirbtn = document.querySelector(".closecir");

const tritext = document.querySelector(".tritext");
const quatext = document.querySelector(".quatext");
const rettext = document.querySelector(".rettext");
const cirtext = document.querySelector(".cirtext");

closetribtn.addEventListener("click", function () {
  tritext.style.display = "none";
});

closequabtn.addEventListener("click", function () {
  quatext.style.display = "none";
});

closeretbtn.addEventListener("click", function () {
  rettext.style.display = "none";
});

closecirbtn.addEventListener("click", function () {
  cirtext.style.display = "none";
});

explitri.addEventListener("click", function () {
  tritext.style.display = "block";
  quatext.style.display = "none";
  rettext.style.display = "none";
  cirtext.style.display = "none";
});

expliqua.addEventListener("click", function () {
  quatext.style.display = "block";
  tritext.style.display = "none";
  rettext.style.display = "none";
  cirtext.style.display = "none";
});

expliret.addEventListener("click", function () {
  rettext.style.display = "block";
  quatext.style.display = "none";
  tritext.style.display = "none";
  cirtext.style.display = "none";
});

explicir.addEventListener("click", function () {
  cirtext.style.display = "block";
  quatext.style.display = "none";
  rettext.style.display = "none";
  tritext.style.display = "none";
});
