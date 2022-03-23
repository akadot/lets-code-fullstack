const ItemCardapio = require("../components/itemCardapio");
const Pedido = require("../components/pedido")

class Lojista {
	#cnpj;

	constructor(nome, cnpj) {
		this.nome = nome;
		this.#cnpj = cnpj;
		this.cardapio = [];
		this.pedidos = [];
	}


	adicionarAoCardapio(item) {
		if (item instanceof ItemCardapio) {
			this.cardapio.push(item);
		} else {
			console.log("Erro ao adicionar item.")
		}
	}
	adicionarAosPedidos(item) {
		if (item instanceof Pedido) {
			this.pedidos.push(item);
		} else {
			console.log("Erro ao adicionar pedido.")
		}
	}	

	removerDoCardapio(item) {
		const existeNoCardapio = this.cardapio.find(i => i.nome === item.nome);
		if (existeNoCardapio) {
			let index = this.cardapio.indexOf(existeNoCardapio);
			this.cardapio.splice(index, 1);
		} else {
			console.log("Erro ao excluir, item não encontrado no cardapio.");
		}
	}

	editarDoCardapio(itemAntigo, itemNovo) {
		if (itemNovo instanceof ItemCardapio) {
			let existeNoCardapio = this.cardapio.find(i => i.nome === itemAntigo);
			if (existeNoCardapio) {
				let index = this.cardapio.indexOf(existeNoCardapio);
				this.cardapio[index] = itemNovo;
			}
		} else {
			console.log("Erro ao editar, item não encontrado no cardapio.");
		}
	}

	mostrarCardapio() {
		this.cardapio.map(item => {
			console.log(`[${item.codigo}]    | ${item.nome}`);
		})
	}

	mostrarPedidos() {
		this.pedidos.map(item => {
			console.log(`-----\npedido id: ${item.id}\ncliente: ${item.cliente.nome}\nrestaurante: ${item.lojista.nome}\n`);
			item.cliente.exibirCarrinho();
			console.log("\n-----");
		})
	}	
}

module.exports = Lojista;