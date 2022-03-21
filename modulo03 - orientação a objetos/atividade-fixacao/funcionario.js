const DescontoFolha = require("./descontosFolha");

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
		return this.#salario;
	}

	get ferias() {
		return this.#salarioBase + this.#ferias;
	}

	calcSalario() {
		if (this.#descontos.length) {
			this.#salario = this.#salarioBase - this.#calcTotalDescontos();
		} else {
			this.#salario = this.#salarioBase;
		}
	}

	calcFerias() {
		this.#ferias = this.#salarioBase * .3;
	}

	adicionarDesconto(desconto) {
		if (desconto instanceof DescontoFolha) {
			this.#descontos.push(desconto);
		};
	}

	#calcTotalDescontos() {
		const percentualTotal = this.#descontos.reduce((acumulador, valorAtual) => acumulador + valorAtual.percentual, 0)

		return this.#salarioBase * percentualTotal / 100;
	}
}

module.exports = Funcionario;