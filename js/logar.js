// * Foco no campo usuário
document.getElementById('campo-usuario').focus();

// * Campo: Mensagem de erro
const msgErro = document.getElementById('msg-login');

const msgErrorResetClassList = () => {
    msgErro.classList.remove('sucesso');
    msgErro.classList.remove('error');
}

function msgErroFracasso() {
    msgErrorResetClassList();
    msgErro.style.display = 'block';
    msgErro.textContent = 'Dados informados incorretamente :(';
    msgErro.classList.add('error');
}

const msgErrorSucesso = () => {
    msgErrorResetClassList();
    msgErro.style.display = 'block';
    msgErro.textContent = 'Logado :)';
    msgErro.classList.add('sucesso');
}

const btnLogar = document.querySelector('#btn-logar').addEventListener('click', (evento) => {
    // * Evitar comportamento padrão de envio de formulário
    evento.preventDefault();

    // * Dados login
    const user = 'dev';
    const pass = 'root'

    // * Captura de dados informados pelo usuário 
    const usuario = document.getElementById('campo-usuario');
    const senha = document.getElementById('campo-senha');

    // * Validação
    if(usuario.value === user && senha.value === pass) {
        msgErrorSucesso();
    } else {
        msgErroFracasso();
    }

});
