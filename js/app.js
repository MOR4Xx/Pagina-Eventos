// Array contendo os caminhos das imagens que serão exibidas no carrossel
const images = [
    'img/imagem1.jpeg', // Caminho para a primeira imagem
    'img/imagem2.jpg',  // Caminho para a segunda imagem
    'img/imagem3.jpeg', // Caminho para a terceira imagem
    'img/imagem4.jpeg', // Caminho para a quarta imagem
];

// Seleciona o elemento da seção de apresentação onde as imagens serão exibidas
const carrosselElement = document.getElementById('apresentacao');

// Índice inicial para controlar a imagem atual no carrossel
let index = 0;

// Função responsável por alterar a imagem de fundo do carrossel
function carrossel() {
    // Define a imagem de fundo do elemento selecionado
    carrosselElement.style.background = `url('${images[index]}') center/cover`;
    // Incrementa o índice para exibir a próxima imagem, voltando ao início ao chegar na última
    index = (index + 1) % images.length;
}

// Inicializa o carrossel exibindo a primeira imagem
carrossel();

// Configura um intervalo para alterar a imagem a cada 5000ms (5 segundos)
setInterval(carrossel, 5000);