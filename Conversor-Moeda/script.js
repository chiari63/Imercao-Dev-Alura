function ConverterD() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorDolar = parseFloat(valor);
  var valorReal = valorDolar * 5.3;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "R$: " + valorReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterE() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorDolar = parseFloat(valor);
  var valorReal = valorDolar * 6.2;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "R$: " + valorReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}