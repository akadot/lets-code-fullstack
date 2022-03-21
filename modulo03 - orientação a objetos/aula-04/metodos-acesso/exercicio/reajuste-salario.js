/* 
  Criar uma classe que implemente o reajuste salarial de um colaborador.
  Essa classe receberá como parâmetros, o colaborador e o percentual
  de reajuste e fará o recálculo dos beneficios desse colaborador.
  Vamos criar, também, uma classe chamada Colaborador, que terá como atributos, o nome,
  a função e o salário.
  A classe RajusteSalario deverá retornar apenas o nome do colaborador e o novo salário dele.
*/

const Colaborador = require("./colaborador");

class ReajusteSalario {
  #colaborador;
  #percentualReajuste;
  constructor(colaborador, percentualReajuste) {
    this.#colaborador = colaborador;
    this.#percentualReajuste = percentualReajuste;
  }

  #reajustarSalario() {
    const novoSalario =
      this.#colaborador.salario * (this.#percentualReajuste + 1);

    this.#colaborador.salario = novoSalario;
  }

  mostrarNovoSalario() {
    this.#reajustarSalario();
    return `
      Colaborador: ${this.#colaborador.nome}
      Novo salário: ${this.#colaborador.salario.toLocaleString("pt-BR", {
        maximumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
        useGrouping: true,
      })}
    `;
  }

  mostrarBeneficiosColaborador() {
    return this.#colaborador.beneficios.mostrarBeneficios();
  }
}

const colaborador1 = new Colaborador("Fulano de Tal", "Programador", 3000);
const reajuste1 = new ReajusteSalario(colaborador1, 0.15);

console.log(reajuste1.mostrarNovoSalario());
console.log(reajuste1.mostrarBeneficiosColaborador());
// console.log(colaborador1.salario);
