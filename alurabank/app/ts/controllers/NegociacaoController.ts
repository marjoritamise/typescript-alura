class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView("#negociacoesView");

  constructor() {
    this._inputData = <HTMLInputElement>document.querySelector("#data");
    this._inputValor = <HTMLInputElement>document.querySelector("#valor");
    this._inputQuantidade = <HTMLInputElement>(
      document.querySelector("#quantidade")
    );
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(event: Event) {
    event.preventDefault();

    const negociacao = new Negociacao(
      new Date(this._inputData.value.replace(/-/g, ",")),
      parseInt(this._inputValor.value),
      parseFloat(this._inputQuantidade.value)
    );

    this._negociacoes.adiciona(negociacao);
    this._negociacoesView.update(this._negociacoes);
  }
}
