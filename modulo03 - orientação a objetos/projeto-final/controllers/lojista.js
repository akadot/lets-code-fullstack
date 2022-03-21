
class Lojista {
	#cnpj;

	constructor(nome, cnpj) {
		this.nome = nome;
		this.#cnpj = cnpj;
		this.cardapio = [];
	}


	adicionarAoCardapio(item) {
		if (typeof item == "string") {
			if (this.cardapio.includes(item)) {
				console.log("Erro ao adicionar, item já existe no cardapio.");
				return "Erro ao adicionar, item já existe no cardapio.";
			}
			this.cardapio.push(item);
		} else {
			console.log("Erro ao adicionar, item inválido.");
			return "Erro ao adicionar, item inválido.";
		}

	}

	removerDoCardapio(item) {
		if (this.cardapio.includes(item)) {
			let index = this.cardapio.indexOf(item);
			this.cardapio.splice(index, 1);
		} else {
			console.log("Erro ao excluir, item não encontrado no cardapio.");
			return "Erro ao excluir, item não encontrado no cardapio.";
		}
	}

	mostrarCardapio() {
		return this.cardapio;
	}
}

module.exports = Lojista;