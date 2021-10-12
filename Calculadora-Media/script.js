function calcular() {
  var valorNac = document.getElementById("nac");
  var nac1 = parseFloat(document.getElementById("nac").value);
  var nac2 = nac1 * 0.2;
  var valorAm = document.getElementById("am");
  var am1 = parseFloat(document.getElementById("am").value);
  var am2 = am1 * 0.3;
  var valorPs = document.getElementById("ps");
  var ps1 = parseFloat(document.getElementById("ps").value);
  var ps2 = ps1 * 0.5;
  var result = nac2 + am2 + ps2;
  var media = document.getElementById("resultado");
  var resultado = "A média é de: " + result;
  media.innerHTML = resultado;
}