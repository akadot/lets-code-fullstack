const ItemCardapio = require("../components/itemCardapio");
const Pedido = require("../components/pedido");
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

	adicionarAosPedidos(item) {
		if (item instanceof Pedido) {
			this.pedidos.push(item);
		} else {
			console.log("Erro ao adicionar pedido.")
		}
	}

	mostrarPedidos() {
		this.pedidos.map(item => {
			console.log(`-----\nID do Pedido: ${item.id}\nNomde do Cliente: ${item.cliente.nome}\nLojista: ${item.lojista.nome}\nSituação: ${item.estado}\nDetalhes:\n`);

			item.detalhes.map(prato => {
				console.log(`-> (${prato.quantidade}x) ${prato.nome}`)
			})

			console.log("\n-----");
		})
	}
}

module.exports = Lojista;