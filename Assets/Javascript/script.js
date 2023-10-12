function duvida(){
    const infosRange = {
        duvidaSim: Number(document.querySelector('#duvidaSim').value),
        duvidaNao: Number(document.querySelector('#duvidaNao').value),
        decisaoSim: Number(document.querySelector('#decisaoSim').value),
        decisaoNao: Number(document.querySelector('#decisaoNao').value)
    };

    let resultadoDuvida = Math.abs(infosRange.duvidaSim - infosRange.duvidaNao);
    let resultadoDecisao = Math.abs(infosRange.decisaoSim - infosRange.decisaoNao);

    let resultadoDiv = document.querySelector('.resultado');

    console.log(resultadoDuvida);

    resultadoDiv.classList.add('visible');

    let mensagemResultado = document.querySelector('.tabela__resultados p');

    if(resultadoDuvida < resultadoDecisao){
        mensagemResultado.textContent = 'Sim, faça isso, não perca tempo';
    } else if(resultadoDuvida > resultadoDecisao) {
        mensagemResultado.textContent = 'Não recomendaria, pois pode ser um erro irreversível.';
    } else if(resultadoDuvida === resultadoDecisao) {
        mensagemResultado.textContent = 'Resultado foi igual. Faça de novo sendo mais rígido com sigo mesmo.';
    } else if(resultadoDuvida, resultadoDecisao === 0){
        mensagemResultado.textContent = 'O resultado foi o mesmo em tudo. Assim não consigo lhe responder';
    }
};