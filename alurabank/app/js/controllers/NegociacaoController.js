class NegociacaoController {
    constructor() {
        this._negociagoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#negociacoesView");
        this._inputData = document.querySelector("#data");
        this._inputValor = document.querySelector("#valor");
        this._inputQuantidade = (document.querySelector("#quantidade"));
        this._negociacoesView.update();
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ",")), parseInt(this._inputValor.value), parseFloat(this._inputQuantidade.value));
        this._negociagoes.adiciona(negociacao);
    }
}
