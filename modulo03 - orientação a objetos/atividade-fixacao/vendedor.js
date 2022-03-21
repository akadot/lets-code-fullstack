const Contratado = require("./contratado");

class Vendedor extends Contratado {
	constructor(id, nome, cpf, dtNasc, salarioBase, descontos, beneficios, vendas) {
		super(id, nome, cpf, dtNasc, salarioBase, descontos, beneficios);
		this.vendas = vendas;
	}

	calcVendas() {
		this.totalVendas = this.vendas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
	}

	calcComissao() {
		this.comissao = this.totalVendas * 0.8;
	}
}

module.exports = Vendedor;