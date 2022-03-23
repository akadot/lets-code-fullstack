const ItemCarrinho = require("../components/itemCarrinho")

class Cliente {
	#cpf;
	#pedidos;
	static contador = 0;

	constructor(nome, cpf, endereco) {
		this.id = ++Cliente.contador;
		this.nome = nome;
		this.#cpf = cpf;
		this.endereco = endereco;
		this.carrinho = [];
		this.#pedidos = [];
	}

	adicionarAoCarrinho(item) {
		if (item instanceof ItemCarrinho) {
			const existeNoCarrinho = this.carrinho.find(i => i.nome === item.nome);
			if (existeNoCarrinho) {
				let index = this.carrinho.indexOf(existeNoCarrinho)
				this.carrinho[index].quantidade++;
			} else {
				console.log(`${item.quantidade} ${item.nome} adicionado ao carrinho.`);
				this.carrinho.push(item);
			}
		} else {
			console.log("Erro ao adicionar item.")
		}
	}

	removerDoCarrinho(item) {
		if (this.carrinho.includes(item)) {
			let index = this.carrinho.indexOf(item);
			this.carrinho.splice(index, 1);
			console.log(`${item.quantidade} ${item.nome} removido do carrinho.`);
		} else {
			console.log("Erro ao deletar, item não encontrado.")
		}
	}

	alterarQuantidadeItem(item, quantidadeNova) {
		if (this.carrinho.includes(item)) {
			let index = this.carrinho.indexOf(item);
			if (quantidadeNova > 0) {
				console.log(`Quantidade de ${item.nome} alterada de ${item.quantidade} para ${quantidadeNova}.`);
				this.carrinho[index].quantidade = quantidadeNova;
				return;
			} else if (quantidadeNova == 0) {
				console.log(`${item.nome} removido do carrinho.`);
				this.carrinho.splice(index, 1);
				return;
			} else if (quantidadeNova < 0) {
				console.log("Erro ao alterar, quantidade inválida")
			}
		}
	}

	exibirCarrinho() {
		console.log("Itens do Carrinho:");
		this.carrinho.map(item => {
			console.log(`-> (${item.quantidade}x) ${item.nome}`);
		})
		return this.carrinho;
	}

	finalizarPedido(pedido) {
		this.#pedidos.push(pedido)
	}
}

module.exports = Cliente;