function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var numeroSecreto = parseInt(Math.random() * 11);
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns, você acertou";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Insira um numero de 0 a 10";
  } else {
    elementoResultado.innerHTML = "Você errou, o numero é:" + numeroSecreto;
  }
}