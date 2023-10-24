function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

//Estrtutura de repetição - Enquanto 
for(contador = 0;contador < listaDeTeclas.length;contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = '#som_${instrumento}';
    console.log(idAudio );

    tecla.onclick = function(){
        tocaSom(idAudio);
    };
    tecla.onkeydiwn = function () {
        tecla.classList.add('ativa');
    }
    tecla.onkeydiwn = function (){
        tecla.classList.remove('ativa');
    }
    console.log(contador);
}