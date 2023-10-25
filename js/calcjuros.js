function enviar() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var input3 = document.getElementById("input3").value;
  var soma = input1;
  var hmt = 0;
  while (Number(input1) <= Number(input2)) {
    soma *= input3 / 20;
    input1 = Number(input1) + Number(soma);
    soma = input1;
    console.log(input1);
    hmt++;
  }
  console.log(hmt);
  var dia = new Date();
  dia.getFullYear();
  console.log(dia);
  const data = new Date(dia);
  data.setDate(data.getDate() + hmt);
  alert(data.toString());
}
