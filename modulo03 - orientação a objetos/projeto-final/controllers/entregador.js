const Pedido = require("../components/pedido")
class Entregador {
	#cpf;
	#veiculo;
	static contador = 0;

	constructor(nome, cpf, veiculo) {
		this.id = ++Entregador.contador;
		this.nome = nome;
		this.#cpf = cpf;
		this.#veiculo = veiculo;
		this.pedidosEmCurso = [];
		this.pedidosFinalizados = [];
	}

	marcarPedido(item) {
		if (item instanceof Pedido) {
			this.pedidosEmCurso.push(item);
		} else {
			console.log("Erro ao adicionar item.")
		}
	}

	mostrarEntregas() {
		console.log("Entregas aceitas:");
		this.pedidosEmCurso.map(item => {
			console.log(`-----\nID do Pedido: ${item.id}\nNomde do Cliente: ${item.cliente.nome}\nLojista: ${item.lojista.nome}\nSituação: ${item.estado}\nDetalhes:\n`);

			item.detalhes.map(prato => {
				console.log(`-> (${prato.quantidade}x) ${prato.nome}`)
			})

			console.log("\n-----");
		});
		return this.pedidosEmCurso;
	}

	entregarPedido(item) {
		if (item instanceof Pedido) {
			if (this.pedidosEmCurso.includes(item)) {
				this.pedidosEmCurso.splice(item, 1);
				this.pedidosFinalizados.push(item);
				this.pedidosFinalizados.map(item => {
					console.log(`-----\nID do Pedido: ${item.id}\nNomde do Cliente: ${item.cliente.nome}\nLojista: ${item.lojista.nome}\nSituação: ${item.estado}\nDetalhes:\n`);

					item.detalhes.map(prato => {
						console.log(`-> (${prato.quantidade}x) ${prato.nome}`)
					})

					console.log("\n-----");
				});
			}
		} else {
			console.log("Erro ao adicionar item.")
		}
	}
}

module.exports = Entregador;