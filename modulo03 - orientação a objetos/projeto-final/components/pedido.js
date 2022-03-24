class Pedido {
	static contador = 0;
	constructor(cliente, lojista, detalhes, estado) {
		this.id = ++Pedido.contador;
		this.cliente = cliente;
		this.lojista = lojista;
		this.detalhes = detalhes;
		this.estado = estado;
	}
}

module.exports = Pedido;