export class RegisterService {
	#profissoes: Array<string>;
	#canais: Array<string>;

	constructor() {
		this.#profissoes = ["Carteiro", "Advogado"]
		this.#canais = ["Youtube"]
	}


	validaNome = (nome: String) => {
		const resArr = nome.split(" ");
		const findNumber = nome.match(/[0-9]/g)?.join("");

		if (resArr.length <= 1 || nome == '' || resArr.length <= 0 || findNumber) {
			return false;
		}

		return true;
	}

	validaDataNasc = (dataNasc: String) => {
		let dataLetters = dataNasc.match(/[a-zA-Z]/g)?.join("");

		if (!dataNasc || dataNasc == "" || dataLetters) {
			return false;
		}

		let dateArr: Array<String> = [];

		if (dataNasc.includes("-")) {
			dateArr = dataNasc.split("-");
		} else if (dataNasc.includes("/")) {
			dateArr = dataNasc.split("/");
		} else {
			return false;
		}

		const today = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }).split(" ")[0];
		const todayArr = today.split("/");

		if (today == `${dateArr[0]}/${dateArr[1]}/${dateArr[2]}`) {
			return false;
		}

		const todayParse = Date.parse(`${todayArr[1]}-${todayArr[0]}-${todayArr[2]}`)
		const dataNascParse = Date.parse(`${dateArr[1]}-${dateArr[0]}-${dateArr[2]}`)

		if (dataNascParse > todayParse) {
			return false;
		}

		return true;
	}

	validaProfissao = (profissao: String) => {
		if (profissao != "" && !this.#profissoes.includes(profissao.toString())) {
			return false;
		}
		return true
	}

	validaPrimeiroContato = (primeiroContato: String) => {
		if (primeiroContato != "" && !this.#canais.includes(primeiroContato.toString())) {
			return false;
		}
		return true
	}

	validaTelefone = (telefone: String) => {
		let phoneNumbers = telefone.match(/\d/g)?.join("");

		if (telefone != "" && telefone != phoneNumbers) {
			return false;
		}

		return true
	}

	validaEndereco = (rua: String, num: Number) => {

		if (!Number(num) || rua == "" || Number(rua) || num <= 0) {
			return false;
		}

		return true
	}

	validaCelular = (celular: String) => {
		let celNumbers = celular.match(/\d/g)?.join("");

		if (celular == "") {
			return false;
		}

		if (celular != celNumbers) {
			return false;
		}

		return true;
	}

	validaEmail = (email: String) => {
		let emailPattern = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);

		if (email == "" || !emailPattern) {
			return false;
		}

		return true
	}

	validaObs = (obs: String) => { return true }

	validaData = (created_at: String) => {
		let dataLetters = created_at.match(/[a-zA-Z]/g)?.join("");

		if (!created_at || created_at == "" || dataLetters) {
			return false;
		}

		let dateArr: Array<String> = [];
		if (created_at.includes("-")) {
			dateArr = created_at.split("-");
		} else if (created_at.includes("/")) {
			dateArr = created_at.split("/");
		} else {
			return false;
		}

		const today = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }).split(" ")[0];
		const todayArr = today.split("/");

		const todayParse = Date.parse(`${todayArr[1]}-${todayArr[0]}-${todayArr[2]}`)
		const created_atParse = Date.parse(`${dateArr[1]}-${dateArr[0]}-${dateArr[2]}`)

		if (created_atParse > todayParse) {
			return false;
		}

		return true;
	}

	validaRegister = (nome: String, dataNasc: String, rua: String, num: Number, email: String, celular: String, created_at: String, telefone: String, obs: String, profissao: String, primeiroContato: String) => {

		if (nome.length >= 50 ||
			dataNasc.length >= 25 ||
			rua.length >= 50 ||
			email.length >= 50 ||
			celular.length >= 50 ||
			created_at.length >= 50 ||
			telefone.length >= 50 ||
			obs.length >= 255 ||
			profissao.length >= 50 ||
			primeiroContato.length >= 50) {
			throw new Error("O número de caracteres foi excedido.")
		}


		const nomeValidation = this.validaNome(nome);
		const dataNascValidation = this.validaDataNasc(dataNasc);
		const profissaoValidation = this.validaProfissao(profissao);
		const primeiroContatoValidation = this.validaPrimeiroContato(primeiroContato);
		const telefoneValidation = this.validaTelefone(telefone);
		const enderecoValidation = this.validaEndereco(rua, num);
		const celularValidation = this.validaCelular(celular);
		const obsValidation = this.validaObs(obs);
		const dataCriacaoValidation = this.validaData(created_at);

		if (nomeValidation == false ||
			dataNascValidation == false ||
			profissaoValidation == false ||
			primeiroContatoValidation == false ||
			telefoneValidation == false ||
			enderecoValidation == false ||
			celularValidation == false ||
			obsValidation == false ||
			dataCriacaoValidation == false) {
			return false;
		}

		return true;
	}
}