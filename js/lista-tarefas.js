
const criarTarefa = () => {

    const nomeNovaTarefa = document.querySelector('[data-input-nova-tarefa]').value;
    const tarefasListagem = document.querySelector('[data-tarefa-listagem]');

    const tarefa = document.createElement('li');
    tarefa.classList.add('listagem-tarefas__item');
    tarefa.innerHTML =
    `<p class="listagem-tarefas__nome-tarefa">${nomeNovaTarefa}</p>
    <div class="listagem-tarefas__botoes">
    <button class="btn-concluir">Concluir</button> <button class="btn-deletar">Deletar</button>
    <div>`;
    
    tarefasListagem.appendChild(tarefa);

}

const btnIncluirNovaTarefa = document.querySelector('[data-btn-incluir-tarefa]');
btnIncluirNovaTarefa.addEventListener('click', criarTarefa);
