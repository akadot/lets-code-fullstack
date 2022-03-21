class BeneficiosColaborador {
  #inss;
  #fgts;
  constructor(inss, fgts) {
    this.#inss = inss;
    this.#fgts = fgts;
  }

  mostrarBeneficios() {
    return `
      INSS: ${this.#inss.toLocaleString("pt-BR", {
        maximumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
        useGrouping: true,
      })}
      FGTS: ${this.#fgts.toLocaleString("pt-BR", {
        maximumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
        useGrouping: true,
      })}
    `;
  }

  set inss(valor) {
    this.#inss = valor;
  }

  set fgts(valor) {
    this.#fgts = valor;
  }
}

module.exports = BeneficiosColaborador;
