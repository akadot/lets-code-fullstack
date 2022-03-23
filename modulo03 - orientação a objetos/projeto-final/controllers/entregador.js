const Pedido = require("../components/pedido")

class Entregador {
    #veiculo
	static contador = 0;

	constructor(nome, veiculo) {
		this.id = ++Entregador.contador;
		this.nome = nome;
		this.#veiculo = veiculo;
		this.pedidos = [];
	}
	marcarPedido(item) {
		if (item instanceof Pedido) {
			this.pedidos.push(item);
		} else {
			console.log("Erro ao adicionar item.")
		}
	}

	mostrarEntregas() {
		console.log("Entregas aceitas:");
		this.pedidos.map(item => {
			console.log(`-----\npedido id: ${item.id}\ncliente: ${item.cliente.nome}\nrestaurante: ${item.lojista.nome}\n`);
			item.cliente.exibirCarrinho();
			console.log("\n-----");
		})
		return this.pedidos;
	}
}

module.exports = Entregador;
