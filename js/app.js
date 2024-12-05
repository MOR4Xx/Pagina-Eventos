const images = [
    'img/imagem1.jpeg',
    'img/imagem2.jpg',
    'img/imagem3.jpeg',
    'img/imagem4.jpeg',
];

const carrosselElement = document.getElementById('apresentacao');

let index = 0;

function carrossel() {
    carrosselElement.style.background = `url('${images[index]}') center/cover`;
    index = (index + 1) % images.length;
}

carrossel();
setInterval(carrossel, 5000);
