const Prato = require("./prato")

class Carrinho {
	constructor(pratos) {
		this.pratos = pratos; //inicia o carrinho
	}

	adicionarPrato(item) {
		if (item instanceof Prato) {
			if (this.pratos.includes(item)) {
				//caso o item já exista, adicione +1 a sua quantidade
				let index = this.pratos.indexOf(item)
				this.pratos[index].quantidade++
			} else {
				//caso não, adicione
				this.pratos.push(item);
			}
		} else {
			console.log("Erro ao adicionar item.")
			return "Erro ao adicionar item."
		}
	}

	removerPrato(item) {
		if (this.pratos.includes(item)) {
			let index = this.pratos.indexOf(item);
			this.pratos.splice(index, 1);
		} else {
			console.log("Erro ao deletar, item não encontrado.")
			return "Erro ao deletar, item não encontrado."
		}
	}

	alterarQuantidade(item, quantidadeNova) {
		if (this.pratos.includes(item)) {
			let index = this.pratos.indexOf(item);
			if (quantidadeNova > 0) {
				this.pratos[index].quantidade = quantidadeNova;
				return;
			} else if (quantidadeNova == 0) {
				this.pratos.splice(index, 1);
				return;
			} else if (quantidadeNova < 0) {
				console.log("Erro ao alterar, quantidade inválida")
				return "Erro ao alterar, quantidade inválida"
			}
		}
	}

	exibirPratos() {
		//exibe o carrinho atual
		return this.pratos;
	}
}

module.exports = Carrinho