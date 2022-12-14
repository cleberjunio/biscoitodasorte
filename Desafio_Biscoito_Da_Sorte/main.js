const homeClick = document.querySelector('.homeClick');
homeClick.addEventListener('click', crackCookie)

const home = document.querySelector('.home');
const sorte = document.querySelector('.sorte');

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', castLuckAgain)


function crackCookie(evento) {
    evento.preventDefault();
    // console.log('capturei...');
    changeScreens();

}



function changeScreens() {
    home.classList.toggle('hide')
    sorte.classList.toggle('hide')
}

function castLuckAgain() {
    changeScreens()

}