class Pedido {
	constructor(id, cliente, lojista, detalhes) {
		this.id = id;
		this.cliente = cliente;
		this.lojista = lojista;
		this.detalhes = detalhes; //obj
	}
}

module.exports = Pedido;