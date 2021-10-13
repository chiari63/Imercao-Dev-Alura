var carta1 = {
  nome: "Goku",
  imagem: "https://jpimg.com.br/uploads/2017/12/dragon-ball-super-ending.jpg",
  atributos: {
    Ataque: 8,
    Defesa: 7,
    Magia: 8
  }
};
var carta2 = {
  nome: "Naruto",
  imagem:
    "https://www.proibidoler.com/wp-content/uploads/2019/11/curiosidades-sobre-naruto-anime-manga-05.jpg",
  atributos: {
    Ataque: 7,
    Defesa: 7,
    Magia: 8
  }
};
var carta3 = {
  nome: "Saitama",
  imagem: "https://criticalhits.com.br/wp-content/uploads/2020/09/Saitama.jpg",
  atributos: {
    Ataque: 10,
    Defesa: 10,
    Magia: 0
  }
};
var carta4 = {
  nome: "Ed Elric",
  imagem:
    "hhttps://ovicio.com.br/wp-content/uploads/2021/03/20210311-fullmetal-alchemist-edward-elric-cosplay-1233210-1280x0-1.jpeg",
  atributos: {
    Ataque: 6,
    Defesa: 7,
    Magia: 9
  }
};
var carta5 = {
  nome: "Levi",
  imagem:
    "https://rollingstone.uol.com.br/media/_versions/levi-ackerman-attack-on-titan-melhores-momentos-foto-reproducao_widelg.jpg",
  atributos: {
    Ataque: 8,
    Defesa: 7,
    Magia: 0
  }
};
var carta6 = {
  nome: "Gojo",
  imagem: "hthttps://criticalhits.com.br/wp-content/uploads/2021/04/Gojo-3.jpg",
  atributos: {
    Ataque: 9,
    Defesa: 9,
    Magia: 9
  }
};
var carta7 = {
  nome: "Tanjiro",
  imagem:
    "https://referencianerd.com/wp-content/uploads/2020/03/Tanjiro-Kamado-SM.jpg",
  atributos: {
    Ataque: 7,
    Defesa: 6,
    Magia: 5
  }
};
var carta8 = {
  nome: "Deku",
  imagem:
    "https://sm.ign.com/t/ign_br/screenshot/default/deku-my-hero-academia_58uc.1200.jpg",
  atributos: {
    Ataque: 8,
    Defesa: 7,
    Magia: 9
  }
};
var carta9 = {
  nome: "Meliodas",
  imagem:
    "https://nerdhits.com.br/wp-content/uploads/2021/07/meliodas-curiosidades-1.jpg",
  atributos: {
    Ataque: 6,
    Defesa: 8,
    Magia: 8
  }
};

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9
];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 9);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 9);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 9);
  }
  cartaJogador = cartas[numeroCartaJogador];
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Parabens, você Venceu!</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Que pena, você Perdeu!</p>";
  } else {
    htmlResultado =
      "<p class='resultado-final'>Foi quase, dessa vez deu empate</p>";
  }
  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disable = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}