export default class Pessoa {

    _nome
    _cpf

    constructor(nome, cpf) {
        this._nome = nome;
        this._cpf = cpf;
    }

    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }

    get cpf() {
        return this._cpf
    }
    set nome(novoNome) {
        this._nome = novoNome
    }


}
