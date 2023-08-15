const super_mario = document.querySelector('.super_mario');
const tubo = document.querySelector('.tubo');


const pulo_do_mario = () => {
    super_mario.classList.add('pulo_do_mario');

    setTimeout(() => {
        super_mario.classList.remove('pulo_do_mario');
    }, 1);
}

const loop = setInterval(() => {

    const posicaoTubo = tubo.offSetLeft;
    const posicaoMario = +window.getComputedStyle('super_mario').bottom.replace('px', '');

    if (posicaoTubo == 85){
        tubo.style.animation = 'none';
        tubo.style.left = `${posicaoTubo}px`;
    }

}, 10);

document.addEventListener('keydown', pulo_do_mario);