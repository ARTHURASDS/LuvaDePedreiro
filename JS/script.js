const luva = document.querySelector('.luva');
const van = document.querySelector('.van');

const jump = () => {

    luva.classList.add('jump');

    setTimeout(()=> {

        luva.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const vanPosition = van.offsetLeft;
    const luvaPosition = +window.getComputedStyle(luva).bottom.replace('px', '')

    if (vanPosition < 121 && luvaPosition < 80) {

        van.style.animation = 'none';
        // van.style.left = '${vanPosition}px'; N ta pegando...

        luva.style.animation = 'none';
        // luva.style.left = '${luvaPosition}px'; N ta pegando...

    }
}, 10);

document.addEventListener('keydown', jump);