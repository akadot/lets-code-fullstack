class ItemCardapio {
	static contador = 0;

	constructor(nome) {
		this.codigo = ++ItemCardapio.contador;
		this.nome = nome;
	}
}

module.exports = ItemCardapio;