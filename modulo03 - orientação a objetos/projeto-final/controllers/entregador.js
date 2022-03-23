class Entregador {
	#cpf;
	#pedidosFinalizados
	static contador = 0;

	constructor(nome, cpf) {
		this.id = ++Entregador.contador;
		this.nome = nome;
		this.#cpf = cpf;
		this.#pedidosFinalizados = [];
	}

	escolherPedido() { }

	entregarPedido(pedido) {

	}
}

module.exports = Entregador;