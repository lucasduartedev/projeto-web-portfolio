// * Foco no campo usuário
document.getElementById('campo-usuario').focus();

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
        alert('Usuário logado!');
    } else {
        alert('Usuário não logado!');
    }

});
