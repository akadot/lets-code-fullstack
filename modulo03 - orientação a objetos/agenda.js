class Contato {
	constructor(nome, telefone) {
		this.nome = nome;
		this.telefone = telefone;
	}
}

class Agenda {
	constructor(contato) {
		this.contato = contato;
	}

	exibirContatos() {
		return this.contato
	}

	deletarContatos(contatoDeletar) {
		if (this.contato.includes(contatoDeletar)) {
			let index = this.contato.indexOf(contatoDeletar)
			this.contato.splice(index, 1)
			return `O contato ${contatoDeletar.nome} foi excluído.`
		} else {
			return "O contato não existe."
		}
	}

	buscarContatos(constatoBusca) {
		if (this.contato.includes(constatoBusca)) {
			return `O contato de ${constatoBusca.nome} é ${constatoBusca.telefone}.`
		} else {
			return "O contato não existe."
		}
	}
}

const Paulo = new Contato("Paulo", "16988307129");
const Pedro = new Contato("Pedro", "16988307129");

const agenda = new Agenda([Paulo, Pedro]);

// console.log(agenda)
console.log(agenda.exibirContatos()) // exibe todos
console.log(agenda.deletarContatos(Pedro)) // deleta o contato
console.log(agenda.deletarContatos(Pedro)) // exibe mensagem de 'impossível deletar'
console.log(agenda.exibirContatos()) // exibe lista atualizada
console.log(agenda.buscarContatos(Paulo)) // busca contato
console.log(agenda.buscarContatos(Pedro)) // exibe mensagem de 'impossível buscar'