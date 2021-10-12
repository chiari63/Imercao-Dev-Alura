function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var nomeFavorito = document.getElementById("nomeFilme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmes(filmeFavorito);
    listarNomes(nomeFavorito);
  } else {
    console.error("insira uma imagem valida");
  }
  document.getElementById("filme").value = "";
  document.getElementById("nomeFilme").value = "";
}
function listarFilmes(filmeFavorito) {
  var elementoFilme = "<img src=" + filmeFavorito + ">";
  var campoListaFilmes = document.getElementById("listaFilmes");
  campoListaFilmes.innerHTML = campoListaFilmes.innerHTML + elementoFilme;
}

function listarNomes(nomeFavorito) {
  var elementoNome = "<h2>" + nomeFavorito + "</h2>";
  var campoListaNomes = document.getElementById("listaFilmes");
  campoListaNomes.innerHTML = campoListaNomes.innerHTML + elementoNome;
}