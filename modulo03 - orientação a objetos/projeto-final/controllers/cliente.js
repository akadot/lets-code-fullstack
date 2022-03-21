const Prato = require("../components/prato")

class Cliente {
	#cpf;
	#endereco;
	static contador = 0;

	constructor(nome, cpf, endereco) {
		this.id = ++Cliente.contador;
		this.nome = nome;
		this.#cpf = cpf;
		this.#endereco = endereco;
		this.carrinho = [];
	}

	adicionarAoCarrinho(item) {
		if (item instanceof Prato) {
			if (this.carrinho.includes(item)) {
				let index = this.carrinho.indexOf(item)
				this.carrinho[index].quantidade++;
			} else {
				this.carrinho.push(item);
			}
		} else {
			console.log("Erro ao adicionar item.")
			return "Erro ao adicionar item."
		}
	}

	removerDoCarrinho(item) {
		if (this.carrinho.includes(item)) {
			let index = this.carrinho.indexOf(item);
			this.carrinho.splice(index, 1);
		} else {
			console.log("Erro ao deletar, item não encontrado.")
			return "Erro ao deletar, item não encontrado."
		}
	}

	alterarQuantidadeItem(item, quantidadeNova) {
		if (this.carrinho.includes(item)) {
			let index = this.carrinho.indexOf(item);
			if (quantidadeNova > 0) {
				this.carrinho[index].quantidade = quantidadeNova;
				return;
			} else if (quantidadeNova == 0) {
				this.carrinho.splice(index, 1);
				return;
			} else if (quantidadeNova < 0) {
				console.log("Erro ao alterar, quantidade inválida")
				return "Erro ao alterar, quantidade inválida"
			}
		}
	}


	exibirCarrinho() {
		return this.carrinho;
	}
}

module.exports = Cliente;