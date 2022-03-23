class Pedido {
	static contador = 0;
	
	constructor(cliente, lojista, detalhes) {
		this.id = ++Pedido.contador;
		this.cliente = cliente;
		this.lojista = lojista;
		this.detalhes = detalhes; //obj
	}
}

module.exports = Pedido;