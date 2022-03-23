class ItemCarrinho {
	static contador = 0;

	constructor(nome, quantidade) {
		this.id = ++ItemCarrinho.contador;
		this.nome = nome;
		this.quantidade = quantidade;
	}
}

module.exports = ItemCarrinho;