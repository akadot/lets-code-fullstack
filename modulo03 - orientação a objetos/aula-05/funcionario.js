const DescontoFolha = require("./desconto-folha");

class Funcionario {
  #cpf;
  #salario;
  #ferias;
  #salarioBase;
  #descontos;

  constructor(id, nome, cpf, dtNasc, salarioBase, descontos) {
    this.#cpf = cpf;
    this.#salarioBase = salarioBase;
    this.#descontos = descontos;
    this.id = id;
    this.nome = nome;
    this.dtNasc = dtNasc;
  }

  get salario() {
    return this.#salario.toLocaleString("pt-BR", {
      maximumFractionDigits: 2,
      style: "currency",
      currency: "BRL",
      useGrouping: true,
    });
  }

  get ferias() {
    return this.#ferias.toLocaleString("pt-BR", {
      maximumFractionDigits: 2,
      style: "currency",
      currency: "BRL",
      useGrouping: true,
    });
  }

  calcularSalario() {
    if (this.#descontos.length) {
      this.#salario = this.#salarioBase - this.#calcularDescontoTotal();
    } else {
      this.#salario = this.#salarioBase;
    }
  }

  calcularFerias() {
    this.#ferias = this.#salarioBase * 1.3;
  }

  adicionarDesconto(desconto) {
    if (desconto instanceof DescontoFolha) {
      this.#descontos.push(desconto);
    }
  }

  #calcularDescontoTotal() {
    const percentualTotal = this.#descontos.reduce(
      (acumulador, valorAtual) => acumulador + valorAtual.percentual,
      0
    );

    return (this.#salarioBase * percentualTotal) / 100;
  }
}

module.exports = Funcionario;
