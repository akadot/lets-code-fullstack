class Prato {
	static contador = 0;

	constructor(nome, quantidade) {
		this.id = ++Prato.contador;
		this.nome = nome;
		this.quantidade = quantidade;
	}
}

module.exports = Prato;