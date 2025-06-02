const container = document.querySelector('.bolhas-container');

function criarBolha() {
  const bolha = document.createElement('div');
  const tamanho = Math.random() * 20 + 20;
  const posicao = Math.random() * window.innerWidth;

  bolha.classList.add('bolha');
  bolha.style.width = `${tamanho}px`;
  bolha.style.height = `${tamanho}px`;
  bolha.style.left = `${posicao}px`;
  bolha.style.animationDuration = `${4 + Math.random() * 4}s`;

  container.appendChild(bolha);

  setTimeout(() => bolha.remove(), 8000);
}

setInterval(criarBolha, 400);
