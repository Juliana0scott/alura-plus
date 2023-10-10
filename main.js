function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play('');
}

const listadeteclas = document.querySelectorAll('.tecla');


for (contador = 0; contador < listadeteclas.length; contador++){

    const instrumento = listaDeTeclas[contador].classList{1};

    const tecla = listaDeTeclas[contador];

    const idAudio = `#som_${instrumento}`

    tecla.onclik =function(){
        tocaSom(idAudio);

    };

}
    
