document.body.addEventListener('keyup', (event)=>{
    /* captura a tecla pressionada no browser e transforma para minúscula */
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () =>{
    let song = document.querySelector('#input').value;

    if (song != '') {
        /* transformando o que foi digitado em array */
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound) {
    /* cria a variável e atribui o valor (id) da tecla pressionada (querySelector identifica o id no html */
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    /* se existe o id no html (pressionou as teclas específicas) */
    if (audioElement) {
        /* permite tocar antes de terminar o som */
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        /* adiciona active na classe da div para mudar a cor do botão conforme css */
        keyElement.classList.add('active');

        /* após 300 milisegundos, remove a cor do botão, removendo a classe active da div */
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for (let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 25
    }
}