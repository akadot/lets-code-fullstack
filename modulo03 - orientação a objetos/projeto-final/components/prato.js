class Prato {
	constructor(nome, quantidade) {
		this.id = this.#criarId();
		this.nome = nome;
		this.quantidade = quantidade;
	}

	#criarId() {
		return Math.random() * 10 //gera um id aleatório e "único"
	}
}

module.exports = Prato;