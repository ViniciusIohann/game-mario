const super_mario = document.querySelector('.super_mario');
const tubo = document.querySelector('.tubo');


const pular = () => {
    super_mario.classList.add('pular');

    setTimeout(() => {
        super_mario.classList.remove('pular');
    }, 999);
}

const loop = setInterval(() => {

    const posicaoTubo = tubo.offsetLeft;
    const posicaoMario = +window.getComputedStyle(super_mario).bottom.replace('px', '');

    if (posicaoTubo <= 60 && posicaoTubo > 0 && posicaoMario < 90){
        tubo.style.animation = 'none';
        tubo.style.left = `${posicaoTubo}px`;

        super_mario.style.animation = 'none';
        super_mario.style.bottom = `${posicaoMario}px`;

        super_mario.src='./Img-mario/game-over.png';
        super_mario.style.width = '200px'
        super_mario.style.left = '40%'
        super_mario.style.top = '50px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', pular);
document.addEventListener('click', pular);
document.addEventListener('touch', pular);