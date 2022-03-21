const BeneficiosColaborador = require("./beneficios-colaborador");

class Colaborador {
  #nome;
  #funcao;
  #salario;
  #beneficios;

  constructor(nome, funcao, salario) {
    this.#nome = nome;
    this.#funcao = funcao;
    this.#salario = salario;
    this.#calcularBeneficios();
  }

  get nome() {
    return this.#nome;
  }

  get funcao() {
    return this.#funcao;
  }

  get salario() {
    return this.#salario;
  }

  get beneficios() {
    return this.#beneficios;
  }

  set nome(str) {
    this.#nome = str;
  }

  set funcao(str) {
    this.#funcao = str;
  }

  set salario(str) {
    this.#salario = str;
    this.#calcularBeneficios();
  }

  #calcularBeneficios() {
    const inss = this.#salario * 0.11;
    const fgts = this.#salario * 0.08;
    this.#beneficios = new BeneficiosColaborador(inss, fgts);
  }
}

module.exports = Colaborador;
