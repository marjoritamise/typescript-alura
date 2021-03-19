class Negociacoes {
    constructor() {
        this._negociagoes = [];
    }
    adiciona(negociacao) {
        this._negociagoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociagoes);
    }
}
