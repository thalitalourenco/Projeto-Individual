const frases = [
  '"Estou pronto, estou pronto, estou pronto!" - Bob Esponja',
  '"A maionese é um instrumento?" - Patrick Estrela',
  '"As maquinações internas da minha mente são um enigma." - Patrick Estrela',
  '"Não consigo ver minha testa!" - Patrick Estrela',
  '"Você não precisa de carteira para dirigir um sanduíche." - Bob Esponja',
  '"Eu sou um Amendobobo, yeah!" - Bob Esponja',
  '"Se você acreditar em si mesmo, todos os seus sonhos podem se tornar realidade." - Bob Esponja',
  '"Você pode ser o que você quiser se tiver imaginação" - Bob Esponja'
];

function mostrarFrase() {
  const index = Math.floor(Math.random() * frases.length);
  document.getElementById("quote").innerText = frases[index];
}

mostrarFrase();

setInterval(mostrarFrase, 4000);
