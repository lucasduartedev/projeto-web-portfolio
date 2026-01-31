export default class Contato {

    _email
    _celular

    constructor(email, celular) {
        this._email = email;
        this._celular = celular;
    }

    get email() {
        return this._email;
    }
    set email(novoEmail) {
        this._email = novoEmail;
    }

    get celular() {
        return this._celular;
    }
    set celular(novoCelular) {
        this._celular = novoCelular;
    }

}