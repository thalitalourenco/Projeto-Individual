const conteudo = document.querySelector('.conteudo');
const itens = document.querySelectorAll('.conteudo li');
const btnProximo = document.querySelector('.proximo');
const btnAnterior = document.querySelector('.anterior');
const carrosselPersonagens = document.querySelector('.carrossel_personagens');

let index = 0; // Começa no Gary (índice 0) para que Bob (índice 1) fique centralizado inicialmente
const totalItensOriginal = itens.length - 2;
let larguraItem;
let larguraContainer;
const itensVisiveis = 3;

function atualizarCarrossel(direcao = 0) {
    itens.forEach(item => item.classList.remove('ativo'));

    if (index < 0) {
        index = totalItensOriginal - 1;
        conteudo.style.transition = 'none';
        conteudo.style.transform = `translateX(-${index * larguraItem - (larguraContainer - larguraItem) / 2}px)`;
        conteudo.offsetHeight;
        conteudo.style.transition = 'transform 0.5s ease-in-out';
    } else if (index >= totalItensOriginal) {
        index = 0;
        conteudo.style.transition = 'none';
        conteudo.style.transform = `translateX(-${index * larguraItem - (larguraContainer - larguraItem) / 2}px)`;
        conteudo.offsetHeight;
        conteudo.style.transition = 'transform 0.5s ease-in-out';
    }

    const indiceAtivo = index + Math.floor(itensVisiveis / 2);
    let indiceAtivoCorrigido = indiceAtivo;

    if (indiceAtivoCorrigido < 0) {
        indiceAtivoCorrigido += totalItensOriginal;
    } else if (indiceAtivoCorrigido >= totalItensOriginal) {
        indiceAtivoCorrigido -= totalItensOriginal;
    }

    itens[indiceAtivoCorrigido].classList.add('ativo'); // Agora o índice corresponde diretamente

    larguraItem = itens[0].offsetWidth + 20;
    larguraContainer = carrosselPersonagens.offsetWidth;
    const deslocamento = index * larguraItem - (larguraContainer - larguraItem) / 2;
    conteudo.style.transform = `translateX(-${deslocamento}px)`;
}

btnProximo.addEventListener('click', () => {
    index++;
    atualizarCarrossel(1);
});

btnAnterior.addEventListener('click', () => {
    index--;
    atualizarCarrossel(-1);
});

let intervalo = setInterval(() => {
    index++;
    atualizarCarrossel(1);
}, 3000);

carrosselPersonagens.addEventListener('mouseenter', () => clearInterval(intervalo));

carrosselPersonagens.addEventListener('mouseleave', () =>
    intervalo = setInterval(() => {
        index++;
        atualizarCarrossel(1);
    }, 3000));

function inicializarCarrossel() {
    setTimeout(() => {
        larguraItem = itens[0].offsetWidth + 20;
        larguraContainer = carrosselPersonagens.offsetWidth;
        const initialTranslateX = 1 * larguraItem - (larguraContainer - larguraItem) / 2; // Desloca para centralizar o Bob Esponja (índice 1)
        conteudo.style.transform = `translateX(-${initialTranslateX}px)`;
        itens[1].classList.add('ativo'); // Destaca o Bob Esponja inicialmente
    }, 100);
}

inicializarCarrossel();
window.addEventListener('resize', inicializarCarrossel);