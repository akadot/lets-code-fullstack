const BeneficiosFolha = require("./beneficiosFolha");
const Funcionario = require("./funcionario");

class Contratado extends Funcionario {
	#beneficios;

	constructor(id, nome, cpf, dtNasc, salarioBase, descontos, beneficios) {
		super(id, nome, cpf, dtNasc, salarioBase, descontos);
		this.#beneficios = beneficios;
	}

	adicionaBeneficio(beneficio) {
		if (beneficio instanceof BeneficiosFolha) {
			this.#beneficios.push(beneficio)
		}
	}

	#calcTotalBeneficios() {
		return this.#beneficios.reduce((acumulador, valorAtual) => acumulador + valorAtual.valor, 0)
	}

	get salario() {
		const salario = super.salario;
		return salario + this.#calcTotalBeneficios();
	}
}

module.exports = Contratado;