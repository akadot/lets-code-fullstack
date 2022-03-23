class Entregador {
	#cpf;

	static contador = 0;

	constructor(nome, cpf) {
		this.id = ++Entregador.contador;
		this.nome = nome;
		this.#cpf = cpf;
	}

	verPedidos() { }

	escolherPedido() { }

	entregarPedido() { }
}