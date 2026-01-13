
const btn_jogar = document.querySelector('#btn_jogar').addEventListener('click', (evento) => {

    // * opção escolhida pelo usuário
    const btnOpcoesUsuario = document.querySelector('input[name="jogo"]:checked');
    let escolhaDoUsuario;

    // * Texto resultado!
    let texto_resultado = 'Não jogado ainda';

    if(!btnOpcoesUsuario) {
        texto_resultado = 'Nada escolhido!';
    } else {
        // console.log('Escolha do usuário:' + btnOpcoesUsuario.value);
        escolhaDoUsuario = btnOpcoesUsuario.value;
    }

    // * Escolha da máquina
    const opcoesDoJogo = ['pedra', 'papel', 'tesoura'];
    const escolhaDaMaquina = opcoesDoJogo[parseInt((Math.random() * 3))];
    // console.log(escolhaDaMaquina);

    // * verificar ganhador: MÁQUINA vs HUMANO
    
    if(escolhaDoUsuario == escolhaDaMaquina) {
        texto_resultado = 'Jogo empatado!';
    }

    if(escolhaDaMaquina === 'pedra' && escolhaDoUsuario === 'tesoura') {
        texto_resultado = 'Máquina venceu (PEDRA vence TESOURA)';
    } else if(escolhaDaMaquina === 'pedra' && escolhaDoUsuario === 'papel') {
        texto_resultado = 'Usuário venceu (PAPEL vence PEDRA)';
    }

    if(escolhaDaMaquina === 'papel' && escolhaDoUsuario === 'pedra') {
        texto_resultado = 'Máquina venceu (PAPEL vence PEDRA)';
    } else if(escolhaDaMaquina === 'papel' && escolhaDoUsuario === 'tesoura') {
        texto_resultado = 'Usuário venceu (TESOURA vence PAPEL)';
    }

    if(escolhaDaMaquina === 'tesoura' && escolhaDoUsuario === 'papel') {
        texto_resultado = 'Máquina venceu (TESOURA vence PAPEL)';
    } else if(escolhaDaMaquina === 'tesoura' && escolhaDoUsuario === 'pedra') {
        texto_resultado = 'Usuário venceu (PEDRA vence TESOURA)';
    }

    
    // * mostrar resultado na página
    // console.log(texto_resultado);
    const campoResultado = document.querySelector('.texto-resultado');
    campoResultado.classList.add('mostrar-mensagem');
    campoResultado.textContent = texto_resultado;

});
